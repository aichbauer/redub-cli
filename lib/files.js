'use strict';


var fs = require('fs');
var path = require('path');
var getInstalledPath = require('get-installed-path');


module.exports = {

  getPathOfGlobalPackage: function(packageName, cb){

    getInstalledPath(packageName)
      .then(function(pathTo){
        
        cb(pathTo);

      })
      .catch(function(err){

        return err;

      });

      

  },


  getPathToBase: function(){

    return path.dirname(process.cwd())+'/'+path.basename(process.cwd())+'/';

  },


  getCurrentDirectoryBase : function() {

    return path.basename(process.cwd());

  },


  directoryExists : function(filePath) {

    try {

      return fs.statSync(filePath).isDirectory();

    } catch (err) {

      return false;

    }

  }

};