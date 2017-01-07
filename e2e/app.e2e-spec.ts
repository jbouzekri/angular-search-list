import { AngularSearchListPage } from './app.po';

describe('angular-search-list App', function() {
  let page: AngularSearchListPage;

  beforeEach(() => {
    page = new AngularSearchListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
