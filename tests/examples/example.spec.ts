import { test, expect } from '@playwright/test';

test.describe("Example tests", () => {
  test('Login screen has a title | @example', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Cypress Real World App');
  });
});
