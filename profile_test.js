module.exports = {
    'case 6 : Add new profile': function(browser) {
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
        .waitForElementVisible('.account-dropdown-button')
        .moveToElement('div[.account-dropdown-button]',50, 50)
        .pause(1000)
        .waitForElementVisible({selector : '#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.pinning-header > div > div > div > div:nth-child(4) > div > div.account-drop-down.sub-menu.theme-lakira > div > ul.sub-menu-list.profiles > li.sub-menu-item.profile-link > a'},10000)
        .click({selector : '#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.pinning-header > div > div > div > div:nth-child(4) > div > div.account-drop-down.sub-menu.theme-lakira > div > ul.sub-menu-list.profiles > li.sub-menu-item.profile-link > a'})
        .waitForElementVisible('.addProfileIcon icon-tvuiAdd',10000)
        .click({selector : '#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.profiles-gate-container > div > div > ul > li:nth-child(3) > a'})
        .waitForElementVisible('#add-profile-name',10000)
        .updateValue('#add-profile-name','Testname')
        .click('.profile-button preferred-action preferred-active')
        .waitForElementVisible({selector : '#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.profiles-gate-container > div > div > ul > li:nth-child(3) > div > a > span'})
        .expect.element({selector : '#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.profiles-gate-container > div > div > ul > li:nth-child(3) > div > a > span'}).text.to.equal('Testname')
    },
    'case 7 : Delete profile': function(browser) {
        browser
          .waitForElementVisible('div[data-profile-guid="OOPV5QW5GZCQ5AZWQX5DDYRMQA"]')
          .click('div[data-profile-guid="OOPV5QW5GZCQ5AZWQX5DDYRMQA"]')
          .waitForElementVisible('button[data-uia="profile-delete-button"]')
          .click('button[data-uia="profile-delete-button"]')
          .waitForElementVisible({selector : '#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.profiles-gate-container > div > div > span:nth-child(4)'})
          .click({selector : '#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.profiles-gate-container > div > div > span:nth-child(4)'})
      },
  };