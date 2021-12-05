const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {

  // locators
  getSearchButton() { return $('//*[@id="home_root"]/div[1]/nav/div[1]/div[1]/div/div[3]/button')};
  getSearchBar() { return $("//input[@placeholder='Start typing...']")};

  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  // open the search bar
  openSearch()
  {
    this.getSearchButton.click();
  }

  // search student beans site
  search(query)
  {
    this.clearAndSendKeys(this.getSearchBar(), query);
  }

  getResults(query)
  {
    // there can be multiple results for the query so capture all of them
    let results = $$("//a/div/span[contains(text(), '${query}')]");

    return results;
  }
}

module.exports = simpleSearchPageObject
