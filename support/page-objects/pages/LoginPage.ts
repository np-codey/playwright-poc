import { type Locator, type Page } from '@playwright/test';
import { PageModel } from '@support/page-objects/PageModel';

/**
 * The login page for the application.
 */
export class LoginPage extends PageModel {
  readonly path: string;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.path = 'signin';
    this.usernameInput = this.page.locator('input#username');
    this.passwordInput = this.page.locator('input#password');
    this.signInButton = this.page.locator('[data-test="signin-submit"]');
  }

  async logIn(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}