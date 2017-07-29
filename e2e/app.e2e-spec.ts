import { TestLoginPage } from './app.po';

describe('test-login App', () => {
  let page: TestLoginPage;

  beforeEach(() => {
    page = new TestLoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
