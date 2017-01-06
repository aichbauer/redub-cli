'use strict';


var fs = require('fs');


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

  }

};