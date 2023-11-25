import { type Locator, type Page } from '@playwright/test';

/**
 * The login page for the application.
 */
export class SidebarComponent {
  readonly page: Page;
  readonly usernameHeader: Locator;
  readonly logOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameHeader = this.page.locator('[data-test="sidenav-username"]');
    this.logOutButton = this.page.locator('[data-test="sidenav-signout"]');
  }
}