#!/usr/bin/env node
'use strict';


var program = require('commander');
var c = require('./createNew');
var g = require('./generate');
var files = require('./files');


program
  .version('0.0.1')

program
  .command('new [opt]')
  .description('create a new redub project or create a new redub project in [opt]')
  .action(function (opt) {

    c.createNew(opt);

  });

program
  .command('generate <req> [opt]')
  .description('generate action/reducer/component')
  .action(function (req, opt) {

    console.log('generate');

    if(req == 'act'){

      g.generateAction(opt);

    } else if(req == 'red'){

      g.generateReducer(opt);
      
    } else if(req == 'comp'){

      g.generateComponent(opt);
      
    } else if(req == 'view'){

      g.generateView(opt);
      
    } else {

      g.generateAll(req);

    }

  });

program.parse(process.argv);