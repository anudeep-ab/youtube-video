import { YoutubeVideoSearchPage } from './app.po';

describe('youtube-video-search App', () => {
  let page: YoutubeVideoSearchPage;

  beforeEach(() => {
    page = new YoutubeVideoSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
