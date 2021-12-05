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

    // find element
    find(selector)
    {
        return driver.findElement(selector);
    }

    // find and click element
    findAndClick(selector)
    {
          driver.findElement(selector).click();
    }

    // clear and send keys
    clearAndSendKeys(selector, keys)
    {
        let element = driver.findElement(selector);
        element.clear();
        element.sendKeys(keys);
    }
}

module.exports = ParentPageObject
