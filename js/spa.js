/*
 * spa.js
 * Danilo Zekovic
 * OSCON 2016
*/

var spa = (function () {
  'use strict';
  var initModule = function ( $container ) {
    // Start the shell
    spa.shell.initModule( $container );
  };
  return { initModule: initModule };
}());
