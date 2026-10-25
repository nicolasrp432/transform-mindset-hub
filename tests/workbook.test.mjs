import test from 'node:test';
import assert from 'node:assert/strict';
import { LeadMagnetSchema } from '../src/lib/validations/index.ts';
import { persistLead } from '../src/lib/lead-capture.ts';
import { createWorkbookToken, verifyWorkbookToken, ACCESS_SECONDS } from '../src/lib/workbook-access.ts';

const input = { name: ' Ana ', email: ' ANA@example.com ', privacyAccepted: true, marketingConsent: false, website: '' };
test('download does not require marketing consent; email is normalized', () => {
  const parsed = LeadMagnetSchema.parse(input);
  assert.equal(parsed.email, 'ana@example.com');
  assert.equal(parsed.name, 'Ana');
  assert.equal(parsed.marketingConsent, false);
});
test('invalid contact, missing privacy permission and honeypot are rejected', () => {
  for (const changes of [{ email: 'bad' }, { name: '' }, { privacyAccepted: false }, { website: 'spam' }]) {
    assert.equal(LeadMagnetSchema.safeParse({ ...input, ...changes }).success, false);
  }
});
test('storage errors including duplicate conflicts never produce success', async () => {
  for (const code of ['42501', '23505', '42P01']) assert.equal((await persistLead({}, async () => ({ error: { code } }))).success, false);
  assert.equal((await persistLead({}, async () => { throw Error('offline'); })).success, false);
  assert.equal((await persistLead({}, async () => ({ error: null }))).success, true);
});
test('download access requires intact, unexpired server signature', () => {
  const secret = 'test-only-signing-secret-not-for-production';
  const now = 1792880000000;
  const token = createWorkbookToken(secret, now);
  assert.equal(verifyWorkbookToken(token, secret, now), true);
  assert.equal(verifyWorkbookToken(token, secret, now + ACCESS_SECONDS * 1000), false);
  assert.equal(verifyWorkbookToken(token, secret + 'wrong', now), false);
  assert.equal(verifyWorkbookToken(token + 'x', secret, now), false);
  assert.equal(verifyWorkbookToken(undefined, secret, now), false);
  assert.equal(verifyWorkbookToken(token, '', now), false);
  assert.throws(() => createWorkbookToken('short'));
});
