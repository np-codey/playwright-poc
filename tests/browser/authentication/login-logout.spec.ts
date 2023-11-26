import { test, expect } from '@playwright/test';
import { LoginPage } from '@support/page-objects/pages/LoginPage';
import { SidebarComponent } from '@support/page-objects/components/SidebarComponent';
import { Actor } from '@support/actors/Actor';
import { ActorFactory } from '@support/actors/ActorFactory';
import { standard } from '@data/users.json';

test.describe("Log in and log out", () => {
  let user: Actor;
  let loginPage: LoginPage;
  let sideBar: SidebarComponent;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    sideBar = new SidebarComponent(page);
    user = ActorFactory.getUser(standard);
    await loginPage.goto();
    await loginPage.logIn(user.username, user.password);
  });

  test('Standard user can log in | @browser @critical @C000001', async ({ page }) => {
    await expect(sideBar.usernameHeader).toContainText(user.username);
  });

  test('Standard user can log out | @browser @critical @C000002', async ({ page }) => {
    await sideBar.logOutButton.click();
    await expect(loginPage.signInButton).toBeVisible();
  });
});

