
import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { url } from "inspector";
import path from "path";

import { Browser, BrowserContext, Locator, Page } from "playwright";

const { chromium, expect, test } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);

let page: {
    [x: string]: any;
    locator: any; goto: (arg0: string) => any; getByLabel: (arg0: string) => string[]; getByRole: (arg0: string, arg1: { name: string; }) => {
        [x: string]: any; (): any; new(): any; click: { (): any; new(): any; };
    }; getByText: (arg0: string) => any;
}, browser: { newContext: (arg0: { viewport: null; }) => any; close: () => any; };


Given('i launch the browser', async function () {
    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    const context = await browser.newContext({ viewport: null });

    page = await context.newPage();

});

Given('i launch the facebook application', async function () {

    await page.goto("https://www.facebook.com/");

});

Then('i verify the username', async function () {

    //1st way

    await page.locator('id=email').fill("Rama")

    //2nd way

    //1st way

    const username: Locator = await page.locator('id=email')

    username.fill("kanth")
});

Then('i close the application', async function () {

    browser.close();

});

Given('i launch the test automation practice application', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

});

Given('i launch the frames automation', async function () {

    await page.goto("https://ui.vision/demo/webtest/frames/");

});

Given('i launch the sauce demo application', async function () {

    await page.goto("https://www.saucedemo.com/v1/index.html");

});

Then('i enter text to the wikipedia', async function () {

    // classname

    await page.locator('.wikipedia-search-input').fill("livetech")

    //xpath

    //absolute xpath : will not work

    //1st way

    //await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[3]/div/aside/div/div[1]/div[1]/form/div/span[2]/span[1]/input').fill('thrusday')

    // relative xpaths

    await page.locator("//input[@id='Wikipedia1_wikipedia-search-input']").fill("thursday")

    await page.locator("xpath=//input[@id='Wikipedia1_wikipedia-search-input']").fill("morning")

    //css selector

    await page.locator("input[id='Wikipedia1_wikipedia-search-input']").fill("Amol")

    await page.locator("css=input[id='Wikipedia1_wikipedia-search-input']").fill("Ranga")
});

Then('i click on the start button', async function () {

    await page.locator('text=START').click();

});

Then('i enter text to the Name textbox', async function () {

    //contains

    await page.locator("//*[contains(@placeholder,'Enter Name')]").fill("Friday")

    //starts-with

    await page.locator("//*[starts-with(@placeholder,'Enter EMail')]").fill("testing@gmail.com")

    //text

    await page.locator("//*[text()='START']").click();

    await page.locator("//button[text()='STOP']").click()

    await page.locator("//*[starts-with(text(),'START')]").click();

    //await page.locator("//*[contains(text(),'STOP')]").click();

    //And

    await page.locator("//input[@type='text' and @placeholder='Enter Phone']").fill("7867890987")

    await page.screenshot({ path: 'screenshot.png' });

    //And

    let orWebelements = await page.locator("//input[@type='text' or @placeholder='Enter Phone']").all()

    console.log(orWebelements.length) //13

});

Then('i enter text to the application', async function () {

    //parent

    let parentWebelements = await page.locator("//input[@placeholder='Enter Phone']//parent::div").all()

    console.log(parentWebelements.length) //1

    //ancestor

    let ancestorWebelements = await page.locator("//input[@placeholder='Enter Phone']//ancestor::div").all()

    console.log(ancestorWebelements.length) //20

    //preceding

    let precedingWebelements = await page.locator("//input[@placeholder='Enter Phone']//preceding::div").all()

    console.log(precedingWebelements.length) //91

    //child

    let childWebelements = await page.locator("//div[@class='post hentry uncustomized-post-template']//child::meta").all()

    console.log(childWebelements.length) //6

    //child

    let descendantWebelements = await page.locator("//div[@class='post hentry uncustomized-post-template']//descendant::meta").all()

    console.log(descendantWebelements.length) //6

    //following

    let followingWebelements = await page.locator("//div[@class='post hentry uncustomized-post-template']//following::div").all()

    console.log(followingWebelements.length) //148

    //following-sibling

    let followingSiblingWebelements = await page.locator("//input[@id='field1']//following-sibling::input").all()

    console.log(followingSiblingWebelements.length) //1

    await page.locator("//input[@id='field1']//following-sibling::input").fill("testing");
});

Then('i am using all playwright Locators', async function () {

    await page.getByPlaceholder("Enter Name").fill('Today is Saturday');

    await page.getByRole('button', { name: 'START' }).click();

    await page.getByRole('button', { name: 'STOP' }).click();

    await page.getByText("New Tab").click();

    await page.bringToFront()

    await page.reload()

    await page.goto("https://login.salesforce.com/");

    await page.getByLabel("Username").fill('Rama kanth');

    await page.getByLabel("Password").fill('Good Morning');

    await page.getByAltText("Salesforce").click();

    await page.goto("https://parabank.parasoft.com/parabank");

    await page.getByAltText("ParaBank").click();

    await page.getByTitle("ParaBank").click();


});

Then('i am using playwright Methods', async function () {

    //1st way

    console.log(await page.title()) //Automation Testing Practice

    //2nd way

    let title = await page.title()

    console.log(title) //Automation Testing Practice

    // url 

    console.log(await page.url()); //https://testautomationpractice.blogspot.com/

    // to create new tab

    const context = await browser.newContext({ viewport: null });

    let page1 = await context.newPage();

    await page1.goto('https://www.facebook.com/');
});

Then('i am using playwright all Methods', async function () {

    await page.locator("#Wikipedia1_wikipedia-search-input").type("Monday");

    await page.locator("#Wikipedia1_wikipedia-search-input").clear();

    let text = await page.locator("//h2[text()='Dynamic Button']").innerText();

    console.log("inner text is :" + text) //inner text is :Dynamic Button

    let innerHTML = await page.locator("//h2[text()='Dynamic Button']").innerHTML();

    console.log("inner HTML is :" + innerHTML) //inner HTML is :Dynamic Button

    let hidden = await page.locator("#textarea").isHidden();

    console.log("hidden web element is :" + hidden) //hidden web element is :false

    let visible = await page.locator("#textarea").isVisible();

    console.log("visible web element is :" + visible) //visible web element is :true

    let disbaled = await page.locator("#textarea").isDisabled();

    console.log("disbaled web element is :" + disbaled) //disbaled web element is :false

    let enabled = await page.locator("#textarea").isEnabled();

    console.log("enabled web element is :" + enabled) //enabled web element is :true

    let editable = await page.locator("#textarea").isEditable();

    console.log("editable web element is :" + editable) //editable web element is :true

    await page.locator("#textarea").fill("Ashok");

    await page.locator("#datepicker").scrollIntoViewIfNeeded();

    await page.locator("#datepicker").highlight();

    await page.locator("#sunday").scrollIntoViewIfNeeded();

    let checked = await page.locator("#sunday").isChecked();

    console.log("checked web element is :" + checked) //checked web element is :false

    await page.locator("//input[@id='sunday']").setChecked(true);

    checked = await page.locator("#sunday").isChecked();

    console.log("checked web element is :" + checked) //checked web element is :true

    //await page.locator("//input[@id='sunday']").uncheck();

    checked = await page.locator("#sunday").isChecked();

    console.log("checked web element is :" + checked)//checked web element is :false

    let attributeName = await page.locator("#sunday").getAttribute("class");

    console.log("attributeName of class is :" + attributeName) //attributeName of class is :form-check-input

    attributeName = await page.locator("#sunday").getAttribute("id");

    console.log("attributeName of id is :" + attributeName) //attributeName of id is :sunday

    attributeName = await page.locator("#sunday").getAttribute("value");

    console.log("attributeName of value is :" + attributeName) //attributeName of value is :sunday

    let innerTexts = await page.locator("//h2[@class='title']").allInnerTexts();

    console.log("total count of  web elements are : " + innerTexts.length)

    console.log("total count of  web elements are : " + innerTexts.count)

    for (let i = 0; i < innerTexts.length; i++) {

        console.log(innerTexts[i])
    }

    console.log("===================all text contents===================")

    let textContents = await page.locator("//h2[@class='title']").allTextContents();

    console.log("total count of  web elements are : " + textContents.length)

    for (let i = 0; i < textContents.length; i++) {

        console.log(textContents[i])
    }

    console.log("======================================")

    await page.goto("https://www.meesho.com/")

    await page.locator("//*[text()='Women Ethnic']").hover();

});

Then('i am using playwright all Methods part 2', async function () {

    console.log("==================get Attribute====================")

    let tagname = await page.locator("//*[@id='field2']").evaluate((e: { tagName: any; }) => e.tagName);

    console.log("tagname of field2 is :" + tagname) //tagname of field2 is :INPUT

    console.log("================keyboard actions======================")

    await page.locator("//*[@id='field1']").press('Control+A')

    await page.keyboard.press('Delete')

    await page.keyboard.up('Control')

    //1st way

    await page.locator("//*[@id='field1']").fill("Rama kanth")

    //2nd way

    await page.keyboard.insertText("Tuesday")

    //3rd way

    await page.locator("//*[@id='field1']").pressSequentially("Early")

    //4th way

    await page.locator("//*[@id='field1']").type("Morning")

    console.log("================right Click======================")

    await page.locator("//*[@class='start']").scrollIntoViewIfNeeded();

    await page.locator("//*[@class='start']").click({ button: 'right' });

    console.log("======================================")

    await page.locator("//input[@type='text']").first().fill("cucumber");

    await page.locator("//input[@type='text']").last().fill("cucumber");

    console.log("======================================")

    await page.locator("(//input[@type='text'])[3]").fill("Phone");

    await page.locator("(//input[@type='text'])[3]").clear();

    await page.locator("//input[@type='text']").nth(2).fill("Phone");

    console.log("================drag and drop======================")

    const source = await page.locator("#draggable");

    const target = await page.locator("#droppable");

    await source.dragTo(target);

    console.log("================drag and drop======================")

    await page.locator("//*[@class='start']").dispatchEvent('click');

    console.log("======================================")

    await page.locator("//input[@type='text']").nth(2).clear();

    await page.locator("//input[@type='text']").nth(2).focus();

    await page.locator("//input[@type='text']").nth(2).fill("Rama kanth");

    console.log("======================================")

    //await page.locator("//*[@class='stop']").dblClick();

    console.log("==============handling the dropdowns========================")

    const colorsDropdown: Locator = await page.locator("#colors")

    colorsDropdown.selectOption('Green');

    colorsDropdown.selectOption(['Red', 'Yellow', 'Blue']);

    console.log("==============screenshots========================")

    await page.locator("//input[@type='text' and @placeholder='Enter Phone']").fill("7867890987")

    await page.screenshot({ path: 'screenshot.png' });
});

Then('i verify webtable statically', async function () {

    let webTable = await page.locator("//table[@name='BookTable']")

    if (webTable.isVisible()) {

        console.log("webTable is displayed in the web page")

        let expectedText = "JAVA";

        let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[4]/td[3]").innerText();

        if (actualText == expectedText) {

            console.log(expectedText + " is displayed in the web page")
        }
    }
    else {
        console.log("webTable is not displayed in the web page")
    }

});


Then('i verify webtable dynamically', async function () {

    let webTable = await page.locator("//table[@name='BookTable']")

    if (webTable.isVisible()) {

        console.log("webTable is displayed in the web page")

        let rows = await page.locator("//table[@name='BookTable']//tbody//tr").all();

        if (rows.length > 0) {

            console.log("webTable contains rows")

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]/td").all();

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        let expectedText = "Javascript";

                        let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]/td[" + j + "]").innerText();

                        if (actualText == expectedText) {

                            console.log(expectedText + " is displayed in the web page on row no " + i + " and the column no is :" + j)
                        }

                    }

                }
                else {

                    console.log("webTable doesn't contains rows")

                }

            }

        }
        else {

            console.log("webTable doesn't contains rows")

        }
    }
    else {
        console.log("webTable is not displayed in the web page")
    }


});

Then('i verify webcalendar statically', async function () {

    await page.locator("//input[@id='datepicker']").click()

    let webCalendar = await page.locator("//table[@class='ui-datepicker-calendar']")

    if (webCalendar.isVisible()) {

        console.log("webCalendar is displayed in the web page")

        let expectedDate = "28";

        let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[4]/td[7]").innerText();

        let actualDateClick = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[4]/td[7]")

        if (actualDate == expectedDate) {

            console.log(expectedDate + " is displayed in the web page")

            actualDateClick.click();
        }
    }
    else {
        console.log("webCalendar is not displayed in the web page")
    }

});

Then('i verify webcalendar dynamically', async function () {

    await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

    let datePicker = await page.locator("//input[@id='datepicker']");

    if (datePicker.isVisible()) {

        console.log("datePicker is displayed on the webpage");

        await page.locator("//input[@id='datepicker']").click();

        let calendarTable = await page.locator(".ui-datepicker-calendar");

        if (calendarTable.isVisible()) {

            console.log("calendarTable is displayed on the webpage");

            let rows = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr").all();

            console.log(" rows count is :" + rows.length);

            if (rows.length > 0) {

                console.log("calendar have rows");

                for (let i = 1; i <= rows.length; i++) {

                    let columns = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td").all();

                    console.log(" columns count is :" + columns.length);

                    if (columns.length > 0) {

                        console.log("calendar have columns");

                        for (let j = 1; j <= columns.length; j++) {

                            let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]");

                            let actualDate1 = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]").innerText();

                            let expectedDate = "15";

                            if (actualDate1 == expectedDate) {

                                console.log("date :" + actualDate1
                                    + " is displayed in the calendar row number " + i
                                    + " and column number is: " + j);

                                actualDate.click();
                            }
                        }

                    } else {

                        console.log("calendar doesn't have columns");
                    }
                }

            } else {

                console.log("calendar doesn't have rows");
            }
        }
        else {
            console.log("calendarTable is not displayed on the webpage");
        }
    }
    else {
        console.log("datePicker is not displayed on the webpage");
    }
});

Then('i verify hard assertions', async function () {

    await expect(page.getByText("Alerts & Popups")).toBeAttached();

    //await expect(page.getByText("Alerts & Popups")).toBeHidden();

    //await expect(page.getByText("Alerts & Popups")).toBeDisabled();

    //await expect(page.getByText("Alerts & Popups")).toBeFocused();

    await expect(page.getByText("Alerts & Popups")).toHaveCount(1);

    await expect(page.locator("//input[@type='text']")).toHaveCount(13);

    await expect(page.getByPlaceholder("Enter Name")).toBeVisible();

    await expect(page.getByPlaceholder("Enter Name")).toBeEnabled();

    await expect(page.getByPlaceholder("Enter Name")).toBeEditable();

    await page.getByPlaceholder("Enter Name").fill("Thrusday");

    await expect(page.getByText("Alerts & Popups")).toContainText("Alerts & Popups");

    await expect(page.locator("//table[@name='BookTable']/tbody/tr/td")).toContainText(['Amod', 'Javascript']);

    await expect(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).toHaveAttribute('class')

    await expect(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).toHaveAttribute('class', 'wikipedia-search-input')

    await expect(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).toHaveId('Wikipedia1_wikipedia-search-input')

    await expect(page.locator("//button[@name='start']")).toHaveRole('button')

    await expect(page.locator("//button[@name='start']")).toHaveText('START')

    await expect(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).toBeEmpty()

    console.log("================")

});

Then('i verify soft assertions', async function () {

    await expect.soft(page.getByText("Alerts & Popups")).toBeAttached();

    // await expect.soft(page.locator("//button[@name='start']")).toHaveText('Rama kanth')

    // await expect.soft(page.getByText("Alerts & Popups")).toBeHidden();

    // await expect.soft(page.getByText("Alerts & Popups")).toBeDisabled();

    // await expect.soft(page.getByText("Alerts & Popups")).toBeFocused();

    await expect.soft(page.getByText("Alerts & Popups")).toHaveCount(1);

    await expect.soft(page.locator("//input[@type='text']")).toHaveCount(13);

    await expect.soft(page.getByPlaceholder("Enter Name")).toBeVisible();

    await expect.soft(page.getByPlaceholder("Enter Name")).toBeEnabled();

    await expect.soft(page.getByPlaceholder("Enter Name")).toBeEditable();

    await page.getByPlaceholder("Enter Name").fill("Thrusday");

    await expect.soft(page.getByText("Alerts & Popups")).toContainText("Alerts & Popups");

    await expect.soft(page.locator("//table[@name='BookTable']/tbody/tr/td")).toContainText(['Amod', 'Javascript']);

    await expect.soft(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).toHaveAttribute('class')

    await expect.soft(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).toHaveAttribute('class', 'wikipedia-search-input')

    await expect.soft(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).toHaveId('Wikipedia1_wikipedia-search-input')

    await expect.soft(page.locator("//button[@name='start']")).toHaveRole('button')

    await expect.soft(page.locator("//button[@name='start']")).toHaveText('START')

    await expect.soft(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).toBeEmpty()

    console.log("================")

});

Then('i verify frames', async function () {

    const allFrames = await page.frames()

    console.log("frame count is :" + allFrames.length)

    //syntax: await page.frameLocator(frame tagname or xpath).loctaor(id/calss/namexpath/css)

    //1st way

    //await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("Ashok")

    //2nd way

    const frame1 = await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']")

    frame1.fill("Rama kanth")

    await page.mainFrame();

    //using url

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

    frame3.fill("//input[@name='mytext3']", "Ashok")

    const childFrames = await frame3.childFrames()

    console.log("childFrames count is :" + childFrames.length)

    await childFrames[0].locator("//*[@id='i6']/div[3]/div").click();

});

Then('i verify And or', async function () {

    //using and

    await page.getByRole('button', { name: 'START' }).click();

    await page.getByRole('button', { name: 'STOP' }).and(page.locator("//*[@class='stop']")).click();

    //using or

    const start = await page.locator("//*[@class='start']");

    const sunday = await page.locator("//input[@id='sunday']");

    await expect(sunday).toBeVisible();

    await expect(start).toBeVisible();

    await expect(sunday.or(start)).toBeVisible();

    console.log("enterName.or(email) is dislayed in the web page")
});

Then('i verify windows', async function () {

    const context = await browser.newContext({ viewport: null });

    let page = await context.newPage();

    let page1 = await context.newPage();

    let page2 = await context.newPage();

    let allPages = context.pages();

    console.log("allPages count is :" + allPages.length)

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle("OrangeHRM");

    await page1.goto('https://www.facebook.com/');

    await expect(page1).toHaveTitle("Facebook – log in or sign up");

    await page2.goto('https://testautomationpractice.blogspot.com/');

    await expect(page2).toHaveTitle("Automation Testing Practice");

    const pagepromise = context.waitForEvent('page')

    await page2.locator("//button[text()='New Tab']").click();

    const newPage = await pagepromise;

    allPages = context.pages();

    console.log("allPages count is :" + allPages.length)

    console.log("title of the new page count is :" + await newPage.title())

    await newPage.getByPlaceholder('Search').fill('Mobiles')

    console.log("==============pages==================")

    await allPages[0].bringToFront();

    await page.locator("//input[@name='username']").fill('Admin');

    await page.locator("//input[@name='password']").fill('admin123');

    console.log("==============handling popups==================")

    await allPages[2].bringToFront();

    const popupPromise = page2.waitForEvent('popup')

    await page2.locator("//button[text()='Popup Windows']").click();

    const popup = await popupPromise;

    console.log("title of the popup is :" + await popup.title())

    //await popup.locator("//*[text()='Register now!']").click();

    allPages = context.pages();

    console.log("allPages count is :" + allPages.length)

    await page.close();

    await context.close();


    /*allPages count is :3
    allPages count is :3
    Locators.ts:801
    allPages count is :4
    allPages count is :4
    Locators.ts:823
    title of the new page count is :Your Store
    title of the new page count is :Your Store
    Locators.ts:825
    ==============pages==================
    ==============pages==================
    Locators.ts:829
    ==============handling popups==================
    ==============handling popups==================
    Locators.ts:837
    title of the popup is :Selenium
    title of the popup is :Selenium
    Locators.ts:847
    allPages count is :6
    allPages count is :6*/

});

Then('i verify filter', async function () {

    await page.locator("#user-name").fill('standard_user');

    await page.locator("#password").fill('secret_sauce');

    await page.locator("#login-button").click();

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Bike Light' })
        .getByRole('button', { name: 'ADD TO CART' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Bike Light' })
        .getByRole('button', { name: 'REMOVE' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'ADD TO CART' }).click()

});

Then('i verify screenshots', async function () {

    //1st way - upto browser level

    await page.screenshot({ path: 'onlythebrowserview.png' })

    //2nd way - complete page level

    await page.screenshot({ path: 'fullbrowserview.png', fullPage: true })

    //3rd way - only web element level

    await page.getByPlaceholder('Enter Phone').screenshot({ path: 'element.png' })

    //4th way - will convert image to string level

    const scr = await page.screenshot();

    console.log(scr.toString('base64'))
});


Then('i verify waits', async function () {

    await page.waitForTimeout(4000);// 4 seconds

    console.log("=======================================================")

    //1st way

    await page.waitForSelector("//*[@id='name']")

    await page.locator("//*[@id='name']").fill("Rama Kanth")

    //2nd way

    await page.waitForSelector("//*[@id='email']", { timeout: 5000 })

    await page.locator("//*[@id='email']").fill("RamaKanth@gmail.com")

    console.log("=======================================================")

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //1st way

    await page.waitForLoadState('load')

    //2nd way

    await page.waitForLoadState('domcontentloaded')

    //3rd way

    await page.waitForLoadState('networkidle')

    console.log("=======================================================")

    //await page.waitForNavigation();

    await page.locator("//input[@name='username']").fill('Admin')


});

Given('i launch the OrangeHRM application', async function () {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});

Given('Enter the username as {string}', async function (username) {

    await page.locator("//input[@name='username']").fill(username);
    
});


Given('Enter the password as {string}', async function (password) {

    await page.locator("//input[@name='password']").fill(password);

});


