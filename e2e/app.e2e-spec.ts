import { CroNG2Page } from './app.po';

describe('cro-ng2 App', function() {
  let page: CroNG2Page;

  beforeEach(() => {
    page = new CroNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
