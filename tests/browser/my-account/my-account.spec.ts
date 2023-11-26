import { test, expect } from '@playwright/test';
import { LoginPage } from '@support/page-objects/pages/LoginPage';
import { SidebarComponent } from '@support/page-objects/components/SidebarComponent';
import { Actor } from '@support/actors/Actor';
import { ActorFactory } from '@support/actors/ActorFactory';
import { MyAccountPage } from '@support/page-objects/pages/MyAccountPage';
import { standard } from '@data/users.json';

test.describe("My account", () => {
  let user: Actor;
  let loginPage: LoginPage;
  let myAccountPage: MyAccountPage;
  let sideBar: SidebarComponent;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    sideBar = new SidebarComponent(page);
    user = ActorFactory.getUser(standard);
    await loginPage.goto();
    await loginPage.logIn(user.username, user.password);
  });

  test('Standard user can change their first name | @browser @high @C000003', async ({ page }) => {
    await sideBar.myAccountButton.click();
    await myAccountPage.firstNameInput.fill("Graham");
    await myAccountPage.userSettingsSubmitButton.click();
    await expect(sideBar.userNameHeader).toContainText("Graham S");
  });
});