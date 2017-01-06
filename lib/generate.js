'use strict';


var fs = require('fs');
var chalk = require('chalk');


module.exports = {

  generateAction: function(name){

    console.log('generated a new action named: ' + name);

  },


  generateReducer: function(name){

    console.log('generated a new reducer named: ' + name);
    
  },

  generateContainer: function(name){

    console.log('generated a new container named: ' + name);
    
  },

  generateComponent: function(name){

    console.log('generated a new component named: ' + name);
    
  },


  generateView: function(name){

    console.log('generated a new view named: ' + name);
    
  },


  generateAll: function(name){

    console.log('generated a action, a reducer: ' + name);

  },


  error: function(type, data){

    if(data == undefined){

      console.log('\n', chalk.bgRed('  error: missing required arument `'+type+'`'), '\n');

    } else if(type == 'what'){

      console.log('\n', chalk.bgRed('  error: required arument `'+type+'` only takes `act`, `red`, `cont`, `comp`, `view` or `all` as value'), '\n');
      
    }

    
  }

};