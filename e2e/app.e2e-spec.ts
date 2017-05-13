import { OperatorPage } from './app.po';

describe('operator App', () => {
  let page: OperatorPage;

  beforeEach(() => {
    page = new OperatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ts works!');
  });
});
