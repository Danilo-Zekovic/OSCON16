// Stage One: All the spa.* files have been parsed
// Mix in React
var React = require('react');

// Stage Two: The old API is available, and React is in scope
console.log('Im not afraid now, so much: ' + React);

// Stage Three: Launch! (At present, classic spa.shell takes over)
spa.initModule($('#spa'));
