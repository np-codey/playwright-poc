import { type Locator, type Page } from '@playwright/test';

/**
 * The login page for the application.
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.locator('input#username');
    this.passwordInput = this.page.locator('input#password');
    this.signInButton = this.page.locator('[data-test="signin-submit"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async logIn(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}