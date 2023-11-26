import { type Locator, type Page } from '@playwright/test';
import { ComponentModel } from '../ComponentModel';

/**
 * The shared left-hand navigation sidebar.
 */
export class SidebarComponent extends ComponentModel {
  readonly userHandleHeader: Locator;
  readonly userNameHeader: Locator;
  readonly logOutButton: Locator;
  readonly myAccountButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userHandleHeader = this.page.locator('[data-test="sidenav-username"]');
    this.userNameHeader = this.page.locator('[data-test="sidenav-user-full-name"]');
    this.logOutButton = this.page.locator('[data-test="sidenav-signout"]');
    this.myAccountButton = this.page.locator('[data-test="sidenav-user-settings"]');
  }
}