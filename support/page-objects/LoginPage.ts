import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input#username');
    this.passwordInput = page.locator('input#password');
    this.signInButton = page.locator('[data-test="signin-submit"]');
  }

  async goto() {
    await this.page.goto('/');
  }
}