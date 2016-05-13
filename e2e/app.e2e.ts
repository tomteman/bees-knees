import { BeesKneesPage } from './app.po';

describe('bees-knees App', function() {
  let page: BeesKneesPage;

  beforeEach(() => {
    page = new BeesKneesPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bees-knees works!');
  });
});
