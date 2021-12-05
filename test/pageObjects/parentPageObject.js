const TEN_SECOND_TIMEOUT = 10000

class ParentPageObject {
  isElementEqualToExpected (element, expectedText) {
    browser.waitUntil(
      () => {
        const errorMessage = 'actual does not equal expected'
        return expect(element.getText(), errorMessage).to.equal(expectedText)
      },
      TEN_SECOND_TIMEOUT,
      'Text does not match expected'
    )
  }

    // clear field and send keys
    clearAndSendKeys(selector, keys)
    {
        let element = selector;
        element.clearValue();
        element.addValue(keys);
    }
}

module.exports = ParentPageObject
