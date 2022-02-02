module.exports = {
    'case 8 : Like a serie': function(browser) {
      browser
        .url('https://www.netflix.com')
        .waitForElementVisible('body')
        .assert.visible('button[data-uia="cookie-disclosure-button-accept"]')
        .click('button[data-uia="cookie-disclosure-button-accept"]')
        .assert.visible('a[data-uia="header-login-link"]')
        .click('a[data-uia="header-login-link"]')
        .assert.urlEquals("https://www.netflix.com/fr/login")
        .updateValue('input[data-uia="login-field"]',"lqjhari@gmail.com")
        .updateValue('input[data-uia="password-field"]',"nightwatch")
        .click('button[data-uia="login-submit-button"]')
        .waitForElementVisible('a[data-uia="action-select-profile+primary"]')
        .click('div[data-profile-guid="WNBCMXQCPVAFZFYQNOF7WG5JJU"]')
        .waitForElementVisible('a[aria-label="All of Us Are Dead"]')
        .moveToElement('a[aria-label="All of Us Are Dead"]',10,10)
        .waitForElementVisible({selector: '#appMountPoint > div > div > div:nth-child(1) > div.focus-trap-wrapper.previewModal--wrapper.mini-modal.has-smaller-buttons > div > div.previewModal--info > a > div > div > div > div > div.buttonControls--container.mini-modal.has-smaller-buttons > div:nth-child(2) > div > button'},10000)
        .click({selector: '#appMountPoint > div > div > div:nth-child(1) > div.focus-trap-wrapper.previewModal--wrapper.mini-modal.has-smaller-buttons > div > div.previewModal--info > a > div > div > div > div > div.buttonControls--container.mini-modal.has-smaller-buttons > div:nth-child(2) > div > button'})

    },
    'case 9 : Add serie to mmy list': function(browser) {
      browser
        .waitForElementVisible('a[aria-label="All of Us Are Dead"]')
        .moveToElement('a[aria-label="All of Us Are Dead"]',10,10)
        .waitForElementVisible({selector: '#appMountPoint > div > div > div:nth-child(1) > div.focus-trap-wrapper.previewModal--wrapper.mini-modal.has-smaller-buttons > div > div.previewModal--info > a > div > div > div > div > div.buttonControls--container.mini-modal.has-smaller-buttons > div:nth-child(3) > button'},10000)
        .click({selector: '#appMountPoint > div > div > div:nth-child(1) > div.focus-trap-wrapper.previewModal--wrapper.mini-modal.has-smaller-buttons > div > div.previewModal--info > a > div > div > div > div > div.buttonControls--container.mini-modal.has-smaller-buttons > div:nth-child(3) > button'})
    },
  
    'case 10 : Remove serie to mmy list': function(browser) {
      browser
        .waitForElementVisible('a[aria-label="All of Us Are Dead"]')
        .moveToElement('a[aria-label="All of Us Are Dead"]',10,10)
        .waitForElementVisible({selector: '#appMountPoint > div > div > div:nth-child(1) > div.focus-trap-wrapper.previewModal--wrapper.mini-modal.has-smaller-buttons > div > div.previewModal--info > a > div > div > div > div > div.buttonControls--container.mini-modal.has-smaller-buttons > div:nth-child(3) > button'},10000)
        .click({selector: '#appMountPoint > div > div > div:nth-child(1) > div.focus-trap-wrapper.previewModal--wrapper.mini-modal.has-smaller-buttons > div > div.previewModal--info > a > div > div > div > div > div.buttonControls--container.mini-modal.has-smaller-buttons > div:nth-child(3) > button'})
      },
  };