import { test, expect } from '@playwright/test';

test.describe("Example tests | @example", () => {
  test('Login screen has a title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Cypress Real World App');
  });
});
