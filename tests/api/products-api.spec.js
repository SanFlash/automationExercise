import { test, expect } from '@playwright/test';
import { environment } from '../../config/environment.js';

test('API-001 GET products list returns a product collection', async ({ request }) => {
  const response = await request.get(`${environment.apiBaseURL}/productsList`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('responseCode', 200);
  expect(Array.isArray(body.products)).toBe(true);
  if (body.products.length) {
    expect(body.products[0]).toHaveProperty('id');
    expect(body.products[0]).toHaveProperty('name');
    expect(body.products[0]).toHaveProperty('price');
  }
});

test('API-002 GET brands list returns a brands collection', async ({ request }) => {
  const response = await request.get(`${environment.apiBaseURL}/brandsList`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('responseCode', 200);
  expect(Array.isArray(body.brands)).toBe(true);
});

test('API-003 documented search endpoint accepts search_product', async ({ request }) => {
  const response = await request.post(`${environment.apiBaseURL}/searchProduct`, { form: { search_product: 'top' } });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('responseCode', 200);
  expect(Array.isArray(body.products)).toBe(true);
});

test('API-004 search without search_product is rejected', async ({ request }) => {
  const response = await request.post(`${environment.apiBaseURL}/searchProduct`, { form: {} });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('responseCode', 400);
});
