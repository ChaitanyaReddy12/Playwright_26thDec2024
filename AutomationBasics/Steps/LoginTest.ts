
import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { url } from "inspector";
import path from "path";

import { Browser, BrowserContext, Locator, Page } from "playwright";

const { chromium, expect, test } = require("@playwright/test");

const { Page } = require("playwright");


//import { LoginPage } from "../Pages/LoginPage"
import { pageFixture } from "../hooks/pageFixture";
import LoginPage from "../Pages/LoginPage";

setDefaultTimeout(60 * 1000);

let page: {
    [x: string]: any;
    locator: any; goto: (arg0: string) => any; getByLabel: (arg0: string) => string[]; getByRole: (arg0: string, arg1: { name: string; }) => {
        [x: string]: any; (): any; new(): any; click: { (): any; new(): any; };
    }; getByText: (arg0: string) => any;
}, browser: { newContext: (arg0: { viewport: null; }) => any; close: () => any; };

const lp = new LoginPage();


Given('i launch the application OrangeHRM', async function () {

      await lp.goto();
});

Given('i provide the credentails', async function () {

   await lp.enterUsername();
   await lp.enterPassword();
   await lp.clickLogin();
});