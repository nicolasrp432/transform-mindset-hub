-- Neon-only migration. Requires a SQL-created, non-admin ainara_ingest login.
-- Do not create the app role through Neon's API (it inherits neon_superuser).
-- Additive migration. Does not change the existing leads table or its policies.
begin;
do $$ begin
  if not exists (
    select 1 from pg_roles where rolname = 'ainara_ingest'
      and not rolsuper and not rolcreaterole and not rolcreatedb and not rolbypassrls
      and not pg_has_role(oid, 'neon_superuser', 'MEMBER')
  ) then raise exception 'Provision a restricted ainara_ingest role before applying';
  end if;
end $$;
create table public.workbook_requests (
  id uuid primary key,
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) between 3 and 254),
  resource_id text not null check (resource_id = 'pausa-primer-paso-v1'),
  source text not null check (source = 'herramientas/cuaderno-gratuito'),
  privacy_accepted boolean not null check (privacy_accepted),
  marketing_consent boolean not null default false,
  consent_version text not null check (consent_version = 'workbook-2026-10-24-v1'),
  privacy_text text not null,
  marketing_text text not null,
  consent_recorded_at timestamptz not null,
  received_at timestamptz not null default now(),
  followup_status text not null check (followup_status in ('resource_only','permission_to_verify','confirmed','unsubscribed')),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  last_contacted_at timestamptz,
  next_contact_at timestamptz
);
create index workbook_requests_email_idx on public.workbook_requests (email, received_at desc);
alter table public.workbook_requests enable row level security;
revoke all on public.workbook_requests from public;
grant usage on schema public to ainara_ingest;
grant insert (id,name,email,resource_id,source,privacy_accepted,marketing_consent,consent_version,privacy_text,marketing_text,consent_recorded_at,followup_status) on public.workbook_requests to ainara_ingest;
create policy workbook_request_insert on public.workbook_requests for insert to ainara_ingest
with check (
  confirmed_at is null and unsubscribed_at is null and last_contacted_at is null and next_contact_at is null
  and ((marketing_consent and followup_status = 'permission_to_verify') or (not marketing_consent and followup_status = 'resource_only'))
  and consent_recorded_at between now() - interval '5 minutes' and now() + interval '1 minute'
);
-- No SELECT, UPDATE or DELETE grants to ainara_ingest. Contacts are private.
-- Follow-up fields may only be changed from the authenticated owner SQL console.
commit;
