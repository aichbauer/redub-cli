#!/usr/bin/env node
'use strict';


var program = require('commander');
var c = require('./createNew');
var g = require('./generate');
var files = require('./files');

var gWhatValue;
var gNameValue;


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

    gWhatValue = what;
    gNameValue = name;
    

    if(what == 'act'){

      return g.generateAction(name);

    } else if(what == 'red'){

      return g.generateReducer(name);
      
    } else if(what == 'cont'){

      return g.generateContainer(name);
      
    } else if(what == 'comp'){

      return g.generateComponent(name);
      
    } else if(what == 'view'){

      return g.generateView(name);
      
    } else if(what == 'all'){

      return g.generateAll(name);

    } else {

      return g.errorWhat(what);

    }

  });

program.parse(process.argv);

if (typeof gNameValue === 'undefined') {
   console.error('no command given!');
   process.exit(1);
}