module.exports = {
    'case 1: Change Netflix Language': function(browser) {
        browser
            .url('https://www.netflix.com')
            .waitForElementVisible('body')
            .assert.visible('button[data-uia="cookie-disclosure-button-accept"]')
            .click('button[data-uia="cookie-disclosure-button-accept"]')
            .assert.visible('select[data-uia="language-picker-header"]')
            .click('select[data-uia="language-picker-header"]')
            .waitForElementVisible('option[data-language="en"]')
            .click('option[data-language="en"]')
            .assert.urlEquals("https://www.netflix.com/fr-en/")
            .end()
        },
  };