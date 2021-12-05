const { assert } = require('chai')
const { Given, When, Then, And } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
})

And('I open the search bar', async() => {
    await simpleSearchPageObject.openSearch();
})

When('I enter {string}', async (query) => {
    await simpleSearchPageObject.search(query);
})

Then('I should be shown a search listing for {string}', async(query) => {
    // gets a list of search results based on the provided query and asserts that it is not empty
    await assert.isNotEmpty(simpleSearchPageObject.getResults(query));
})
