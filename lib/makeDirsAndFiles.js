'use strict';


var chalk = require('chalk');
var files = require('./files');
var copyDir = require('ncp').ncp;
var fs = require('fs');
var path = require('path');


module.exports = {

  makeDirsAndFiles: function (name) {

    if (name != undefined) {

      files.getPathOfGlobalPackage('redub-cli', function (pathTo) {

        copyDir(pathTo + '/templates/base/redub', files.getPathToBase() + name, function (err) {

          if (err) return console.log(chalk.bgRed(err));

          console.log(chalk.bgGreen('created base direcotries'));
          console.log(chalk.bgGreen('created base files'));
          console.log(chalk.bgGreen('redub project named: ' + name));
          return;

        });

      });

    } else {

      files.getPathOfGlobalPackage('redub-cli', function (pathTo) {

        copyDir(pathTo + '/templates/base/redub', files.getPathToBase(), function (err) {

          if (err) return console.log(chalk.bgRed(err));

          console.log(chalk.bgGreen('created base directories'));
          console.log(chalk.bgGreen('created base files'));
          console.log(chalk.bgGreen('redub project'));
          return;

        });

      });

    }

  },


  // TODO: make one function for all creations
  // simple change path to template
  make: function (type, name) {

    var urlToRedubCLI;
    var urlToProject = files.getPathToBase() + 'src/js/';
    var generatortype;

    files.getPathOfGlobalPackage('redub-cli', function (pathTo) {

      urlToRedubCLI = pathTo;

      switch (type) {

        case 'act':
          urlToProject = urlToProject + 'actions';
          urlToRedubCLI = urlToRedubCLI + '/templates/base/redub-templates/actions';
          generatortype = 'action';
          break;
        case 'red':
          urlToProject = urlToProject + 'reducers';
          urlToRedubCLI = urlToRedubCLI + '/templates/base/redub-templates/reducers';
          generatortype = 'reducer';
          break;
        case 'cont':
          urlToProject = urlToProject + 'containers';
          urlToRedubCLI = urlToRedubCLI + '/templates/base/redub-templates/containers';
          generatortype = 'container';
          break;
        case 'comp':
          urlToProject = urlToProject + 'components';
          urlToRedubCLI = urlToRedubCLI + '/templates/base/redub-templates/components';
          generatortype = 'component';
          break;
        case 'view':
          urlToProject = urlToProject + 'views';
          urlToRedubCLI = urlToRedubCLI + '/templates/base/redub-templates/views';
          generatortype = 'view';
          break;

      }

      copyDir(urlToRedubCLI, urlToProject, function (err) {

        fs.rename(urlToProject + '/template', urlToProject + '/' + name, function (err) {

          if (err) return console.log(chalk.bgRed(err));

          fs.rename(urlToProject + '/' + name + '/' + generatortype + 'Template.js',
            urlToProject + '/' + name + '/' + name + '.js',
            function (err) {

              if (err) return console.log(chalk.bgRed(err));

              if (generatortype == 'reducer') {

                rewriteAllReducers(urlToProject, name, './' + name + '/' + name + '.js');

              } 

              if(generatortype != 'action'){

                rewriteTypeName(urlToProject, name, generatortype);

              }

              console.log(chalk.bgGreen('created a new ' + generatortype + ' named: ' + name + '.js'));
              return;

            });

        });

        if (err) return console.log(chalk.bgRed(err));

      });

    })

  }

}

function rewriteTypeName(somePath, name, generatortype) {

  fs.readFile(somePath + '/' + name + '/' + name + '.js', 'utf8', function (err, data) {
    if (err) return console.log(err);

    if(generatortype == 'container' || generatortype == 'component' ) {

      name = name.charAt(0).toUpperCase() + name.slice(1);

    }

    var realName = new RegExp(generatortype+'Template', 'g');

    console.log(realName);

    var result = data.replace(realName, name);

    fs.writeFile(somePath + '/' + name + '/' + name + '.js', result, 'utf8', function (err) {

      if (err) return console.log(err);

    });

  });

}

function rewriteAllReducers(somePath, name, pathTo) {

  var dirLength = getDirectories(somePath).length;

  var data = fs.readFileSync(somePath + '/index.js').toString().split('\n');
  data.splice(1 + dirLength, 0, 'import ' + name + ' from \'' + pathTo + '\'');
  var text = data.join('\n');

  fs.writeFile(somePath + '/index.js', text, function (err) {

    if (err) return console.log(err);

    var data2 = fs.readFileSync(somePath + '/index.js').toString().split('\n');
    data2.splice(7 + dirLength, 0, '  ' + name + ': ' + name + ',');
    var text2 = data2.join('\n');

    fs.writeFile(somePath + '/index.js', text2, function (err) {

      if (err) return console.log(err);

    });

  });

}

function getDirectories(srcpath) {

  return fs.readdirSync(srcpath).filter(function (file) {

    return fs.statSync(path.join(srcpath, file)).isDirectory();

  });

}