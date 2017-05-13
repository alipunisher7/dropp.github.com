import { browser, by, element } from 'protractor';

export class OperatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ts-root h1')).getText();
  }
}
