import { browser, by, element } from 'protractor';


export class LoginTest {
    navigateTo() {
        return browser.get('/login');
    }

    getUserNameInput() {
        return element(by.id('loginInput'));
    }
    getPasswordInput() {
        return  element(by.id('passwordInput'));
    }
    getRememberInput() {
        return element(by.id('rememberInput'));
    }
    getCheckBoxValue() {
        return element(by.id('rememberInput-input'));
    }
    getEmailInput() {
        return element(by.id('emailInput'));
    }
    getError() {
        return element(by.id('mat-error-0'));
    }
    getForgetLink() {
        return element(by.className('link'));
    }
    getRetrunLink() {
        return element(by.className('returnlink'));
    }
    getLoginButton() {
        return element(by.className('loginButton'));
    }
    getRecoverButton() {
        return element(by.className('recoverButton'));
    }
    rightTest() {
        browser.actions().sendKeys('test').perform();
      }
    wrongEmail() {
        browser.actions().sendKeys('badEmail').perform();
    }
    rightEmail () {
        browser.actions().sendKeys('right@email.test').perform();
    }
    clearLocal() {
        localStorage.clear();
    }
    setLocal() {
        browser.executeScript(`window.localStorage.setItem('username', 'joe');`);
        browser.executeScript(`window.localStorage.setItem('password', 'GI');`);
    }
    pause() {
        browser.pause();
    }
}
