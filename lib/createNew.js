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
      console.log('new project');

      if(name != undefined){

        console.log(name);

      }

    });

  }

};