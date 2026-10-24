import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { BOOK_VISUALS } from '../src/lib/product-visuals.ts';
import { GUIDE_SAMPLES, AGENDA_SAMPLES } from '../src/lib/product-samples.ts';
import { PRODUCT_LIST } from '../src/lib/products.ts';

test('every book has real front and back assets', () => {
  for (const book of Object.values(BOOK_VISUALS)) for (const side of ['front','back']) assert.ok(existsSync(new URL(`../public${book[side]}`, import.meta.url)), book[side]);
});
test('all selected preview pages exist and have descriptions', () => {
  for (const sample of [...GUIDE_SAMPLES, ...AGENDA_SAMPLES]) {
    assert.equal(sample.pages.length, 2);
    assert.equal(sample.descriptions.length, 2);
    for (const file of sample.pages) assert.ok(existsSync(new URL(`../public/images/products/${file}`, import.meta.url)));
  }
});
test('agenda 2027 is distinct from the existing payable edition', () => {
  assert.ok(PRODUCT_LIST.every(p => p.href !== '/agenda-2027'));
  const page = readFileSync(new URL('../src/app/agenda-2027/page.tsx', import.meta.url), 'utf8');
  assert.ok(!page.includes('CheckoutButton'));
  assert.ok(page.includes('PRODUCTS.AGENDA_REFLEXION.href'));
  assert.ok(page.includes('Precio, formatos y fecha de venta pendientes'));
});
test('3D controls are accessible and respect reduced motion', () => {
  const component = readFileSync(new URL('../src/components/products/BookShowcase.tsx', import.meta.url), 'utf8');
  assert.ok(component.includes('aria-pressed={back}'));
  assert.ok(component.includes('!compact &&'));
  const css = readFileSync(new URL('../src/components/products/product-showcase.module.css', import.meta.url), 'utf8');
  assert.ok(css.includes('prefers-reduced-motion:reduce'));
  assert.ok(css.includes(':focus-visible'));
});
