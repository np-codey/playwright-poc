import { test, expect } from '@playwright/test';

test.describe("API: Users endpoint", () => {
  test.beforeEach(async ({ page }) => {

  });

  test('Retrieve all users | @critical @A000001', async ({ request }) => {
    const response = await request.get('/users');
  });

  test('Retrieve a single user | @critical @C000001', async ({ page }) => {

  });
});