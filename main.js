// Get our "initial" function to boot up with
import initModule from './js/spa';
var React = require('react');
console.log('Im not afraid now, so much: '+ React);

// Note we're keeping jQuery (for now) as seen by the '$'
spa.initModule($('#spa'));
