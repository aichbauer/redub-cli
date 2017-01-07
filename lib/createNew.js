'use strict';


var chalk = require('chalk');
var figlet = require('figlet');
var fs = require('fs');
var appJsTemplate = require('./templates/appJsTemplate');


module.exports = {

  createNew: function (name) {

    new Promise(function (resolve, reject) {

      figlet('redub', function (err, text) {

        if (err) resolve(console.log(chalk.red(err)));

        resolve(console.log(chalk.green(text)));

      })

    })
      .then(function () {


        if (name != undefined) {

          fs.mkdir(name, function (err) {

            if (err) return console.log(chalk.bgRed('error: ' + err));

            fs.mkdir(name + '/src', function (err) {

              if (err) return console.log(chalk.bgRed('error: ' + err));

              fs.mkdir(name + '/src/config');
              fs.mkdir(name + '/src/scss');
              fs.mkdir(name + '/src/js', function (err) {

                if (err) return console.log(chalk.bgRed('error: ' + err));

                fs.mkdir(name + '/src/js/actions');
                fs.mkdir(name + '/src/js/components');
                fs.mkdir(name + '/src/js/containers');
                fs.mkdir(name + '/src/js/reducers');
                fs.mkdir(name + '/src/js/views');
                fs.writeFile(name + '/src/js/app.js', , function (err) {

                  if (err) return console.log(chalk.bgRed('error: ' + err));

                  return console.log(chalk.bgGreen('created a new redub project named: ' + name));

                });

              });

            });

          });

        } else {

          fs.mkdir('src', function (err) {

            if (err) return console.log(chalk.bgRed('error: ' + err));

            fs.mkdir('src/config');
            fs.mkdir('src/scss');
            fs.mkdir('src/js', function (err) {

              if (err) return console.log(chalk.bgRed('error: ' + err));

              fs.mkdir('src/js/actions');
              fs.mkdir('src/js/components');
              fs.mkdir('src/js/containers');
              fs.mkdir('src/js/reducers');
              fs.mkdir('src/js/views');
              fs.writeFile('src/js/app.js', 'test', function (err) {

                if (err) return console.log(chalk.bgRed('error: ' + err));

                return console.log(chalk.bgGreen('created a new redub project'));

              });

            });

          });

        }

      });

  }

};