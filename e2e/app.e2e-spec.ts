import { Ng4TemplatePage } from './app.po';

describe('ng4-template App', () => {
  let page: Ng4TemplatePage;

  beforeEach(() => {
    page = new Ng4TemplatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
