/*
 * routes.js - module to provide routing
 * Danilo Zekovic
 */

// --- Local variables
'use strict';
var
  configRoutes;
// --- End variable declarations

// --- Public API

configRoutes = function ( router, server ) {
  var options = {
    root: __dirname + '/../'
   };

  router.get('/', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/upload', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/login', function(req, res) {
    res.sendFile('index.html', options);
  });
  router.post('/uploadHandler', function(req, res) {
    console.log('\'bout to upload something');
    if (req.body) {
        console.dir(req.body);
    }
    res.sendStatus(200);
  });
};

module.exports = { configRoutes : configRoutes };
