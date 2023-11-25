import { test, expect } from '@playwright/test';
import { LoginPage } from '@support/page-objects/LoginPage';

test.describe("Log in and log out", () => {
  test('Standard user can log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });
});

