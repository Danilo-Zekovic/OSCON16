/*
 * routes.js - module to provide routing
 * Danilo Zekovic
 */

// --- Local variables
'use strict';
var
  configRoutes,

  // Multer handles MIME multi-part uploads
  multer = require('multer'),
  cb = require('cb'),
  storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
    },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
    }
  }),
  storage = multer( {storage: storage });
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

  router.get('/browse', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/login', function(req, res) {
    res.sendFile('index.html', options);
  });

  // Fetch uploaded file handled by "storage" object in multer
  router.post('/uploadHandler', storage.single('file'), function(req, res) {
    console.log('\'bout to upload something ' + req.file);
    if (req.body) {
        console.log(req.body);
    }
    res.sendStatus(200);
  });
};

module.exports = { configRoutes : configRoutes };
