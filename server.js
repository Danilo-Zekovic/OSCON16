/*
 * app.js
 * Danilo Zekovic
 * express server
 */

'use strict';

var
  http = require('http'),
  express = require('express'),
  // multer = require('multer'),
  bodyParser = require('body-parser'),
  MulterImpl  = require('./js/multerImpl'),
  // methodOverride = require('method-override'),
  // morgan = require('morgan'),

  // Hold this for once I figure out multer
  /* storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
    },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
    }
  }), */

  app = express(),
  router = express.Router(),
  routes = require('./js/routes.js'),
  server = http.createServer( app );
//------------------------------------------------------

    // -- Configure server behavior
    app.use( express.static( __dirname + '/' ) );
    app.use( bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // app.use(multer ( {storage: storage }));
    app.use(new MulterImpl({}).init());
    // app.use(methodOverride());
    // Turn on verbose logging when needed by uncommenting line below
    // app.use(morgan('combined'));
    routes.configRoutes( router, server);
    app.use('/', router);

  // --- End server configuration
//-----------------------------------------------------
// --- Start service
server.listen(5000);
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port, app.settings.env
);
