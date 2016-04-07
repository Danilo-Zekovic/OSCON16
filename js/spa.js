/*
 * spa.js
 * Danilo Zekovic
 * OSCON 2016
*/


  // This is paired with a new ES6 "export default" in the shell's code
  import initModule from './spa.shell';

  export default function ( $container ) {
    console.log('We got into spa');
    // Start the shell
    initModule( $container );
  }
