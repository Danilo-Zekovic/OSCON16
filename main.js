// Stage One: Mix in React
// (This may not be necssary; modules are now webpackable)
var React = require('react');

// Stage Two: Get our custom "classic SPA" modules
// (N.B. Dots in identifiers are problematical in ES6)
// Also note that the shell isn't loaded here; it's loaded inside spa.js
import spaInitModule from './js/spa';
import './js/spa.home';
import './js/spa.upload';
import './js/spa.login';

// Stage Three: Launch! (Presently, a hybrid of old and new techniques)
spaInitModule($('#spa'));
