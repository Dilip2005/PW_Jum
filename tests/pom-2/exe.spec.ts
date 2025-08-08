import test from '@playwright/test'
import { LoginPage } from './Loing';

test("Login Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.url("http://leaftaps.com/opentaps/control/main");
    await loginPage.loginData("Demosalesmanager", "crmsfa");
});
