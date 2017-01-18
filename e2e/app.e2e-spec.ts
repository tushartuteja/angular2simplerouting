import { RoutingdemoPage } from './app.po';

describe('routingdemo App', function() {
  let page: RoutingdemoPage;

  beforeEach(() => {
    page = new RoutingdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
