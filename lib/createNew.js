'use strict';


var chalk = require('chalk');
var figlet = require('figlet');
var mkdaf = require('./makeDirsAndFiles');


module.exports = {

  createNew: function (name) {

    new Promise(function (resolve, reject) {

      figlet('redub', function (err, text) {

        if (err) resolve(console.log(chalk.red(err)));

        resolve(console.log(chalk.green(text)));

      })

    })
      .then(function () {

        mkdaf.makeDirsAndFiles(name);

      })

  }

};