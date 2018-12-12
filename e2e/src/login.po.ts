import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'form' : 'form',
    'email' : 'input[name="email"]',
    'password' : 'input[name="password"]',
    'checkbox' : 'input[name="rememberMe"]',
    'selectGroup': 'mat-select[name="group"]',
    'loginbuton' : 'button',
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  getForm() {
    return element(by.css(this.selectors['form'])).getText();
  }

  getEmail() {
    return element(by.css(this.selectors['email'])).getText();
  }

  getPassword() {
    return element(by.css(this.selectors['password'])).getText();
  }
  getSelectGroup() {
    return element(by.css(this.selectors['selectGroup'])).getText();
  }
  getLoginbuton() {
    return element(by.css(this.selectors['loginbuton'])).getText();
  }


  setEmail(text) {
     element(by.css(this.selectors['email'])).sendKeys(text);
  }
  setPassword(text) {
     element(by.css(this.selectors['password'])).sendKeys(text);
  }
  setSelectGroup() {
     // element(by.css(this.selectors['selectGroup'])).sendKeys(text);
     element(by.css(this.selectors['selectGroup'])).click()
     .then(() => element.all(by.css('mat-option')).last().click());
  }
  setLoginbuton() {
     element(by.css(this.selectors['loginbuton'])).click();
  }



}
