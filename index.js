const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
    .goto('http://192.168.1.254/')
    .type('#user', 'meo')
    .type('#password', 'meo')
    .click('#authform > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(7) > td > input[type="button"]:nth-child(1)')
    .wait('#Menu1Txt1')
    .click('#Menu1Txt1')
    .wait('body > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > div > div.tasks.js_right > table > tbody > tr:nth-child(2) > td.task > a')
    .click('body > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > div > div.tasks.js_right > table > tbody > tr:nth-child(2) > td.task > a')
    .wait('body > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > div > div > table > tbody > tr > td.data.js_right > table > tbody > tr:nth-child(2) > td > form > input[type="button"]:nth-child(5)')
    .click('body > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > div > div > table > tbody > tr > td.data.js_right > table > tbody > tr:nth-child(2) > td > form > input[type="button"]:nth-child(5)')
    .end()
    .then(function(result) {
        console.log(result)
    })
    .catch(function(error) {
        console.error('Error:', error);
    });