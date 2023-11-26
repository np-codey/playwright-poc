import { test, expect } from '@playwright/test';

test.use({ baseURL: process.env.API_URL });

test.describe("Store API endpoints", () => {
  test('Retrieve all inventory and ensure key/values are correct | @api @critical @A000001', async ({ request }) => {
    const response = await request.get('store/inventory');
    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toContainEqual(expect.objectContaining({
        "sold": 4,
        "string": 731,
        "in stock": 1,
        "pending": 1,
        "available": 247,
        "om": 6,
        "on": 5
    }));
  });
});