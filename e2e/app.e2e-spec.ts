import { FilmRatingsPage } from './app.po';

describe('film-ratings App', function() {
  let page: FilmRatingsPage;

  beforeEach(() => {
    page = new FilmRatingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
