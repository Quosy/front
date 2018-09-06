import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain a router outlet', () => {
    page.navigateTo();
    expect(page.getRouterOutlet()).toBeDefined();
  });

});
