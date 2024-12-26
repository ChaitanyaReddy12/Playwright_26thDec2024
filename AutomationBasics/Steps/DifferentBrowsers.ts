
import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { url } from "inspector";
import path from "path";

import { Browser, BrowserContext, firefox, webkit, Locator, Page } from "playwright";

const { chromium, expect, test } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);

let page: {
    [x: string]: any;
    locator: any; goto: (arg0: string) => any; getByLabel: (arg0: string) => string[]; getByRole: (arg0: string, arg1: { name: string; }) => {
        [x: string]: any; (): any; new(): any; click: { (): any; new(): any; };
    }; getByText: (arg0: string) => any;
}, browser: { newContext: (arg0: { viewport: null; }) => any; close: () => any; };

Given('i launch the chrome browser', async function () {
    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    const context = await browser.newContext({ viewport: null });

    page = await context.newPage();

});

Given('i launch the firefox browser', async function () {
    browser = await firefox.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    const context = await browser.newContext({ viewport: null });

    page = await context.newPage();

});

Given('i launch the safari browser', async function () {
    browser = await webkit.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    const context = await browser.newContext({ viewport: null });

    page = await context.newPage();

});

Given('i launch the test automation practice application1', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

});

Then('i close the application1', async function () {

    browser.close();

});