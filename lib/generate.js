'use strict';


var fs = require('fs');
var chalk = require('chalk');
var mkdaf = require('./makeDirsAndFiles');


module.exports = {

  generateAction: function(name){

    mkdaf.make('act', name);

  },


  generateReducer: function(name){

    mkdaf.make('red', name);
    
  },

  generateContainer: function(name){

    mkdaf.make('cont', name);
    
  },

  generateComponent: function(name){

    mkdaf.make('comp', name);
    
  },


  generateView: function(name){

    mkdaf.make('view', name);
    
  },


  generateAll: function(name){

    new Promise(function(resolve,reject){

      resolve(mkdaf.make('act', name));

    })
    .then(function(){
      mkdaf.make('red', name);
    })
    

  },


  error: function(type, data){

    if(data == undefined){

      console.log('\n', chalk.bgRed('  error: missing required arument `'+type+'`'), '\n');

    } else if(type == 'what'){

      console.log('\n', chalk.bgRed('  error: required arument `'+type+'` only takes `act`, `red`, `cont`, `comp`, `view` or `all` as value'), '\n');
      
    }

    
  }

};