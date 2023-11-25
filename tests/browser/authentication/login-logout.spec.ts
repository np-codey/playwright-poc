import { test, expect } from '@playwright/test';
import { LoginPage } from '@support/page-objects/LoginPage';
import { SidebarComponent } from '@support/page-objects/SidebarComponent';
import { Actor } from '@support/actors/Actor';

test.describe("Browser: Log in and log out", () => {
  let user: Actor;
  let loginPage: LoginPage;
  let sideBar: SidebarComponent;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    sideBar = new SidebarComponent(page);
    user = new Actor('Katharina_Bernier', 's3cret');
    await loginPage.goto();
    await loginPage.logIn(user.username, user.password);
  });

  test('Standard user can log in | @critical @C000001', async ({ page }) => {
    await expect(sideBar.usernameHeader).toContainText(user.username);
  });

  test('Standard user can log out | @critical @C000002', async ({ page }) => {
    await sideBar.logOutButton.click();
    await expect(loginPage.signInButton).toBeVisible();
  });
});

