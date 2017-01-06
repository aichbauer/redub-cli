#!/usr/bin/env node
'use strict';


var program = require('commander');
var c = require('./createNew');
var g = require('./generate');
var files = require('./files');


program
  .version('0.0.1')

program
  .command('new [name]')
  .description('create a new redub project or create a new redub project in [opt]')
  .action(function (name) {

    c.createNew(name);

  });

program
  .command('generate <what> <name>')
  .description('generate action/reducer/container/component')
  .action(function (what, name) {

    console.log('generate');

    if(what == 'act'){

      g.generateAction(name);

    } else if(what == 'red'){

      g.generateReducer(name);
      
    } else if(what == 'cont'){

      g.generateContainer(name);
      
    } else if(what == 'comp'){

      g.generateComponent(name);
      
    } else if(what == 'view'){

      g.generateView(name);
      
    } else if(what == 'all'){

      g.generateAll(name);

    }

  });

program.parse(process.argv);