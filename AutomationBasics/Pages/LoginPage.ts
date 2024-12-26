
import { pageFixture } from '../hooks/pageFixture';

export default class LoginPage {
   // readonly page: Page;
    // readonly username_TextBox: Locator;
    // readonly password_TextBox: Locator;
    // readonly login_Button: Locator;
    
    // constructor(page: Page) {
    //     this.page = pageFixture.page;
    // //     this.username_TextBox = page.locator("//input[@name='username']");
    //     this.password_TextBox = page.locator("//input[@name='password']");
    //     // this.pomLink = page.locator('li', {
    //     //   hasText: 'Guides',
    //     // }).locator('a', {
    //     //   hasText: 'Page Object Model',
    //     // });
    //     //this.login_Button = page.locator('article div.markdown ul > li > a');
    //     this.login_Button = page.locator("//button[@type='submit']");

       //}

     private Elements = {
        username_TextBox : "//input[@name='username']",
        password_TextBox :"//input[@name='password']",
        login_Button : "//button[@type='submit']",
      }

      async goto() {
        await pageFixture.page.goto('https://playwright.dev');
      }

      async enterUsername(){

        await pageFixture.page.locator(this.Elements.username_TextBox).fill("Admin")
      }
      
      async enterPassword(){

        await pageFixture.page.locator(this.Elements.password_TextBox).fill("admin123")
      }

      async clickLogin(){

        await pageFixture.page.locator(this.Elements.login_Button).fill("admin123")
      }


}