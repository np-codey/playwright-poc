

import { type Locator, type Page } from '@playwright/test';
import { PageModel } from '@support/page-objects/PageModel';

/**
 * The login page for the application.
 */
export class MyAccountPage extends PageModel {
  readonly path: string;
  readonly firstNameInput: Locator;
  readonly userSettingsSubmitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.path = 'signin';
    this.firstNameInput = this.page.locator('[data-test="user-settings-firstName-input"]');
    this.userSettingsSubmitButton = this.page.locator('[data-test="user-settings-submit"]');
  }
}