module.exports = {
  'case 2 : Connect to your Netflix account': function(browser) {
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
      .assert.urlEquals("https://www.netflix.com/browse")
      .end()
  },

  'case 3 : get error message for not entering email': function(browser) {
    browser
      .url('https://www.netflix.com')
      .waitForElementVisible('body')
      .assert.visible('button[data-uia="cookie-disclosure-button-accept"]')
      .click('button[data-uia="cookie-disclosure-button-accept"]')
      .assert.visible('a[data-uia="header-login-link"]')
      .click('a[data-uia="header-login-link"]')
      .waitForElementVisible('button[data-uia="login-submit-button"]')
      .click('button[data-uia="login-submit-button"]')
      .waitForElementVisible('div[data-uia="login-field+error"]')
      .expect.element('div[data-uia="login-field+error"]').text.to.equal('Veuillez entrer une adresse e-mail ou un numéro de téléphone valide.')
  },

  'case 4 : get error message for password too short': function(browser) {
    browser
      .click('button[data-uia="login-submit-button"]')
      .waitForElementVisible('div[data-uia="password-field+error"]')
      .expect.element('div[data-uia="password-field+error"]').text.to.equal('Votre mot de passe doit comporter entre 4 et 60 caractères.')
  },

  'case 5  : get error message for incorrect password': function(browser) {
    browser
      .updateValue('input[data-uia="login-field"]',"test@gmail.com")
      .updateValue('input[data-uia="password-field"]',"test")
      .click('button[data-uia="login-submit-button"]')
      .waitForElementVisible('div[data-uia="error-message-container"] div[data-uia="text"] b')
      .expect.element('div[data-uia="error-message-container"] div[data-uia="text"] b').text.to.equal('Mot de passe incorrect.')
  },
};