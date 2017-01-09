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
  .command('n [name]')
  .description('create a new redub project or create a new redub project in [opt]')
  .action(function (name) {

    c.createNew(name);

  });

program
  .command('generate [what] [name]')
  .description('generate action/reducer/container/component')
  .action(function (what, name) {

    if(what == undefined) return g.error('what', what);
    if(name == undefined) return g.error('name', name);

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

    }

  });

  program
  .command('g [what] [name]')
  .description('generate action/reducer/container/component')
  .action(function (what, name) {

    if(what == undefined) return g.error('what', what);
    if(name == undefined) return g.error('name', name);

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

    }

  });

program.parse(process.argv);