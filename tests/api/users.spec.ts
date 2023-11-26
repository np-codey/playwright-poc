import { test, expect } from '@playwright/test';

test.describe("Users API endpoint", () => {
  test.beforeEach(async ({ page }) => {

  });

  test('Retrieve all users | @api @critical @A000001', async ({ request }) => {
    const response = await request.get('/users');
  });

  test('Retrieve a single user | @api @critical @C000001', async ({ page }) => {

  });
});