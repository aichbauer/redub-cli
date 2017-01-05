#!/usr/bin/env node
'use strict';


var program = require('commander');
var create = require('./createNew');
var files = require('./files');


program
  .version('0.0.1')

program
  .command('new [opt]')
  .description('create a new redub project or create a new redub project in [opt]')
  .action(function (opt) {

    create.createNew(opt);

  });

program
  .command('generate <req> [opt]')
  .description('generate action/reducer/component')
  .action(function (req, opt) {

    console.log('generate');

    if(req == 'act'){

      console.log('new action for name: ' + opt);

    } else if(req == 'red'){

      console.log('new reducer for name: ' + opt);
      
    } else if(req == 'comp'){

      console.log('new component for name: ' + opt);
      
    } else if(req == 'view'){

      console.log('new view for name: ' + opt);
      
    } else {

      console.log('new action, reducer, and component for name: ' + req);

    }

  });

program.parse(process.argv);