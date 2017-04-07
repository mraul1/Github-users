import { GithubProjPage } from './app.po';

describe('github-proj App', () => {
  let page: GithubProjPage;

  beforeEach(() => {
    page = new GithubProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
