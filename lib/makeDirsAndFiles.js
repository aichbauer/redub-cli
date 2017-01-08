'use strict';


var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var files = require('./files');


module.exports = {

  makeDirsAndFiles: function (name) {

    if (name != undefined) {

      fs.mkdir(name, function (err) {

        if (err) return console.log(chalk.bgRed(err));

        fs.mkdir(name + '/src', function (err) {

          if (err) return console.log(chalk.bgRed(err));

          fs.mkdir(name + '/src/config');
          fs.mkdir(name + '/src/scss');
          fs.mkdir(name + '/src/js', function (err) {

            if (err) return console.log(chalk.bgRed(err));

            console.log(chalk.bgGreen('created all directories'));

            fs.mkdir(name + '/src/js/actions');
            fs.mkdir(name + '/src/js/components');
            fs.mkdir(name + '/src/js/containers');
            fs.mkdir(name + '/src/js/reducers');
            fs.mkdir(name + '/src/js/views');
            makeFiles(name);

          });

        });

      });

    } else {

      if (err) return console.log(chalk.bgRed(err));

      fs.mkdir('/src', function (err) {

        if (err) return console.log(chalk.bgRed(err));

        fs.mkdir('/src/config');
        fs.mkdir('/src/scss');
        fs.mkdir('/src/js', function (err) {

          if (err) return console.log(chalk.bgRed(err));

          console.log(chalk.bgGreen('created all directories'));

          fs.mkdir('/src/js/actions');
          fs.mkdir('/src/js/components');
          fs.mkdir('/src/js/containers');
          fs.mkdir('/src/js/reducers');
          fs.mkdir('/src/js/views');
          makeFiles();

        });

      });

    }

  }

}


function makeFiles(name) {

  if (name != undefined) {

    files.getPathOfGlobalPackage('redub-cli', function (pathTo) {

      fs.createReadStream(pathTo + '/lib/templates/appJsTemplate.js')
        .pipe(fs.createWriteStream(files.getPathToBase() + name + '/src/js/app.js'));
      fs.createReadStream(pathTo + '/lib/templates/packageTemplate.json')
        .pipe(fs.createWriteStream(files.getPathToBase() + name + '/package.json'));

      console.log(chalk.bgGreen('copied all files'));

      return console.log(chalk.bgGreen('created a new redub project named: ' + name));

    });

  } else {

    files.getPathOfGlobalPackage('redub-cli', function (pathTo) {

      fs.createReadStream(pathTo + 'lib/templates/appJsTemplate.js')
        .pipe(fs.createWriteStream(files.getPathToBase() + '/src/js/app.js'));
      fs.createReadStream(pathTo + 'lib/templates/packageTemplate.json')
        .pipe(fs.createWriteStream(files.getPathToBase() + '/package.json'));

      return console.log(chalk.bgGreen('created a new redub project'));

    });

  }

}