// Stage One: Mix in React
var React = require('react');

// Stage Two: Get our custom modules
import spaInitModule from './js/spa';
import './js/spa.home';
import './js/spa.upload';
import './js/spa.login';

// Stage Three: Launch! (Presently, a hybrid)
spaInitModule($('#spa'));
