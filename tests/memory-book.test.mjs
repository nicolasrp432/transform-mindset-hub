import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { MEMORY_BOOK, BOOK_ENCOUNTERS } from '../src/lib/memory-book.ts';
import { findProduct, PRODUCT_LIST } from '../src/lib/products.ts';

test('book facts match the approved editorial edition', () => {
  assert.equal(MEMORY_BOOK.questions, 48);
  assert.equal(MEMORY_BOOK.pages, 128);
  assert.equal(BOOK_ENCOUNTERS.length, 8);
  assert.equal(new Set(BOOK_ENCOUNTERS.map(x => x.question)).size, 8);
});
test('prelaunch book cannot be charged through existing checkout registry', () => {
  assert.equal(findProduct('entre-tu-y-yo'), undefined);
  assert.ok(PRODUCT_LIST.every(x => x.href !== MEMORY_BOOK.href));
});
test('landing has real sample assets and no full paid manuscript download', () => {
  for (const name of ['cover.webp', 'back.webp', 'page-040.webp', 'page-041.webp', 'page-006.webp', 'page-007.webp', 'catalog.webp', 'social.jpg']) {
    assert.ok(existsSync(new URL(`../public/images/entre-tu-y-yo/${name}`, import.meta.url)), name);
  }
  const page = readFileSync(new URL('../src/components/memory-book/MemoryBookLanding.tsx', import.meta.url), 'utf8');
  assert.ok(!page.includes('CheckoutButton'));
  assert.ok(!page.includes('localStorage'));
  assert.ok(page.includes('No hay alta automática, compra ni reserva'));
  assert.ok(page.includes('aria-pressed={encounter === i}'));
});
test('catalog and resource navigation include the book without replacing existing items', () => {
  const catalog = readFileSync(new URL('../src/app/herramientas/page.tsx', import.meta.url), 'utf8');
  assert.ok(catalog.includes('href: MEMORY_BOOK.href'));
  for (const key of ['PRODUCTS.GUIA_PRACTICA.href', 'PRODUCTS.AGENDA_REFLEXION.href', 'PRODUCTS.LIBRO_PRINCESA_TAPA_BLANDA.href']) assert.ok(catalog.includes(key));
  const navbar = readFileSync(new URL('../src/components/Navbar.tsx', import.meta.url), 'utf8');
  assert.ok(navbar.includes('"/entre-tu-y-yo"'));
});
test('reduced motion and mobile layout have explicit adaptations', () => {
  const css = readFileSync(new URL('../src/components/memory-book/memory-book.module.css', import.meta.url), 'utf8');
  assert.ok(css.includes('prefers-reduced-motion:reduce'));
  assert.ok(css.includes('@media(max-width:700px)'));
  assert.ok(css.includes(':focus-visible'));
});
