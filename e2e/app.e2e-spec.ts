import { NgMyPortfolioPage } from './app.po';

describe('ng-my-portfolio App', () => {
  let page: NgMyPortfolioPage;

  beforeEach(() => {
    page = new NgMyPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
