import { OshopFinalPage } from './app.po';

describe('oshop-final App', () => {
  let page: OshopFinalPage;

  beforeEach(() => {
    page = new OshopFinalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
