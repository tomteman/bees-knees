export class BeesKneesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bees-knees-app h1')).getText();
  }
}
