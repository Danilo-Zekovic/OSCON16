/*
 * spa.js
 * Danilo Zekovic
 * OSCON 2016
*/


  // Start the shell
  import initModule from './spa.shell';

  export default function ($container, shellInit) {
    console.log('We got into spa');
    initModule( $container );
  }
