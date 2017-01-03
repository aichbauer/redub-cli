#!/usr/bin/env node
'use strict';


var chalk = require('chalk');
var figlet = require('figlet');
var touch = require('touch');
var fs = require('fs');
var program = require('commander');
var files = require('./files');


program
  .version('0.0.1')

program
  .command('new')
  .action(function (req, opt) {

    figlet('redub', function(err, data){

      if(err) console.log(chalk.red(err));

      console.log(chalk.green(data));

    })

    console.log('create new redub project');

  });

program
  .command('generate <req> [opt]')
  .action(function (req, opt) {

    console.log('generate');

    if(req != 'act' && req != 'red' && req != 'comp' && req != 'view'){

      console.log('new action, reducer, and component for name: ' + req);

    } else if(req == 'act'){

      console.log('new action for name: ' + opt);

    } else if(req == 'red'){

      console.log('new reducer for name: ' + opt);
      
    } else if(req == 'comp'){

      console.log('new component for name: ' + opt);
      
    } else if(req == 'view'){

      console.log('new view for name: ' + opt);
      
    }

  });

program.parse(process.argv);