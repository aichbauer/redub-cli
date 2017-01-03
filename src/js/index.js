#!/usr/bin/env node
'use strict';


var chalk       = require('chalk');
var figlet      = require('figlet');
var touch       = require('touch');
var fs          = require('fs');
var program     = require('commander');
var files       = require('./files');

program
  .version('0.0.1')
  .arguments('<cmd> [opt] [opt2]')
  .action(function(cmd,opt,opt2){

    figlet('redub', function(err, data) {
          if (err) {
              console.log(chalk.red('Something went wrong...'));
              console.dir(err);
              return;
          }
          console.log(chalk.green(data));
      });

      console.log('COMMAND: '+cmd);
      console.log('OPTIONAL ARGUMENT: '+opt);
      console.log('OPTIONAL ARGUMENT 2: '+opt2);

      if(cmd == 'new'){

        console.log('create new redub project here'); 

      }
      else if(cmd == 'generate'){

        console.log('generate');

        if(opt != 'act' && opt != 'comp' && opt != 'view' && opt != 'red'){

          console.log('generate a new action, component and reducer for with name:'+opt);

        } else if(opt == 'act'){

          console.log('create new empty action with name:' + opt2);

        } else if(opt == 'comp'){

          console.log('create new empty component with name:' + opt2);

        } else if(opt == 'view'){

          console.log('create new empty view with name:' + opt2);

        } else if(opt == 'red'){

          console.log('create new empty reducer with name:' + opt2);

        }

      }

  });

  program.parse(process.argv);