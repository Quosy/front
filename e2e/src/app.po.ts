import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getRouterOutlet() {
    return element(by.tagName('router-outlet'));
  }
}
