'use strict';


var chalk = require('chalk');
var figlet = require('figlet');
var fs = require('fs');


module.exports = {

  createNew: function(name){

    new Promise(function(resolve, reject){

        figlet('redub', function(err, text){

          if(err) resolve(console.log(chalk.red(err)));

          resolve(console.log(chalk.green(text)));

        })

    })
    .then(function(){
      

      if(name != undefined){

        fs.mkdir(name);

        console.log('created a new redub project named: ' + name);

      } else {

        console.log('created a new redub project');

      }

    });

  }

};