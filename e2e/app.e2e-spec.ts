import { LodashtestPage } from './app.po';

describe('lodashtest App', () => {
  let page: LodashtestPage;

  beforeEach(() => {
    page = new LodashtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
