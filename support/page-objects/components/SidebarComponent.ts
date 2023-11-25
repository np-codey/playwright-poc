import { type Locator, type Page } from '@playwright/test';
import { ComponentModel } from '../ComponentModel';

/**
 * The shared left-hand navigation sidebar.
 */
export class SidebarComponent extends ComponentModel {
  readonly usernameHeader: Locator;
  readonly logOutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameHeader = this.page.locator('[data-test="sidenav-username"]');
    this.logOutButton = this.page.locator('[data-test="sidenav-signout"]');
  }
}