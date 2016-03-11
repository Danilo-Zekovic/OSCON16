/*
 * spa.shell.js
 * Danilo Zekovic
 * Main shell, basic structure of the app
*/

spa.shell = (function () {
  'use strict';
  // ------------> "Local" variables
  var
    configMap = {
      main_html : String()
      + '<div class="header">'
      +   '<div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">'
      +     '<a class="pure-menu-heading" href="">Scene: History</a>'
      +     '<ul class="pure-menu-list">'
      +       '<li class="pure-menu-item pure-menu-selected"><a href="/" class="pure-menu-link">Home</a></li>'
      +       '<li class="pure-menu-item"><a href="/upload" class="pure-menu-link">Upload</a></li>'
      +       '<li class="pure-menu-item"><a href="/browse" class="pure-menu-link">Browse</a></li>'
      +       '<li class="pure-menu-item"><a href="/dashboard" class="pure-menu-link">Dashboard</a></li>'
      +       '<li class="pure-menu-item"><a href="/login" class="pure-menu-link">Login/Sign Up</a></li>'
      +     '</ul>'
      +   '</div>'
      + '</div>'

      + '<div class="splash-container">'
      +   '<div class="splash">'
      +     '<h1 class="splash-head">Welcome to Scene: History!</h1>'
      +   '</div>'
      + '</div>'

      + '<div class="content-wrapper">'
      +   '<div id="main" class="content">'

      +     '<section><div id="home-view">'
      +     '</div></section>'

      +     '<section><div id="upload-view">'
      +     '</div></section>'

      +     '<section><div id="browes-view">'
      +     '</div></section>'

      +     '<section><div id="dashboard-view">'
      +     '</div></section>'

      +     '<section><div id="login-view">'
      +     '</div></section>'

      +   '</div>'

      +   '<div class="ribbon l-box-lrg pure-g">'
      +     '<div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">'
      +       '<a target="_blank" class="pure-img-responsive" href="http://knuckle.palaver.net:3001/iroq.html">'
      +         '<img alt="File Icons" width="300" src="../css/img/iroquois-web.png">'
      +       '</a>'
      +  '</div>'
      +     '<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">'
      +       '<h2 class="content-head content-head-ribbon">Discover deep zooming image views</h2>'
      +       '<p>'
      +         'Click on the image to see it in a pan-and-zoom interface.'
      +         ' High-resolution scanned images reveal many details that aid'
      +         ' historians in finding clues and correlations.  Take screenshots of close-up'
      +         ' details and discover the power of Scene: History'
      +       '</p>'
      +     '</div>'
      +   '</div>'

      + '<div id="login" class="content">'
      +   '<h2 class="content-head is-center">Sign up now.  Help us preserve historical images.</h2>'
      +   '<div class="pure-g">'
      +     '<div class="l-box-lrg pure-u-1 pure-u-md-2-5">'
      +       'Already have an account? <a href="#">Click here to login</a>'
      +       '<form class="pure-form pure-form-stacked">'
      +         '<fieldset>'

      +           '<label for="name">Your Name</label>'
      +           '<input id="name" type="text" placeholder="Your Name">'

      +           '<label for="email">Your Email</label>'
      +           '<input id="email" type="email" placeholder="Your Email">'

      +           '<label for="password">Your Password</label>'
      +           '<input id="password" type="password" placeholder="Your Password">'

      +           '<label for="password">Re-type Password</label>'
      +           '<input id="password" type="password" placeholder="Your Password">'

      +           '<button type="submit" class="pure-button">Sign Up</button>'
      +         '</fieldset>'
      +       '</form>'
      +     '</div>'

      +     '<div class="l-box-lrg pure-u-1 pure-u-md-3-5">'
      +       '<h4>Contact Us</h4>'
      +       '<p>'
      +         'This site is maintained entirely by volunteers, and we desperately need '
      +         'as many helping hands as we can find.  If the preservation of historical '
      +         'images is of interest to you, please <a href="mailto:brianc@palaver.net">'
      +         'contact us</a> and let\'s talk about how we can work together.'
      +       '</p>'

      +       '<h4>More Information</h4>'
      +       '<p>'
      +         'Scene: History is a combined effort of the Jasper, Pulaski and '
      +         '<a target="_blank" href="http://www.white-county-history.org"> White</a> County '
      +         'Historical Societies in Indiana, and the Computer Science Department at'
      +         ' <a target="_blank" href="http://www.saintjoe.edu">Saint Joseph\'s College.<a/>'
      +       '</p>'
      +     '</div>'
      +   '</div>'

      + '</div>'

      + '<div class="footer l-box is-center">'
      +   'This site created and maintained by the SJC CS OSCON 2016 SPA Tutorial Team.'
      + '</div>'

      + '</div>'

    },

    stateMap = {
      // View state information
      $container  : undefined,
    },

    jqueryMap = {},

    initModule, setJqueryMap,
    currentMod;

  //--- end variables


  //--- Methods interacting with the DOM/jQuery

  // Begin DOM method /setJqueryMap
  setJqueryMap = function () {
    var $container = stateMap.$container;

    // Only three regions for now
    jqueryMap = {
      $container : $container,
      $main      : $container.find('#main'),
      $home      : $container.find('#home-view'),
      $upload    : $container.find('#upload-view'),
      $browse    : $container.find('#browes-view'),
      $dashboard : $container.find('#dashboard-view'),
      $login     : $container.find('#login-view')
    };
  };
  // End DOM method /setJqueryMap

  // Begin client-side router methods

  // Base route
  function index() {
    if( currentMod != jqueryMap.$home ) {
      currentMod.hide();
    }
    //currentMod.hide();
    currentMod = jqueryMap.$home;
    currentMod.show();
    //jqueryMap.$home.show();
  }

  function upload() {
    console.log("Reached upload");
    if( currentMod != jqueryMap.$upload ) {
      currentMod.hide();
    }
    currentMod = jqueryMap.$upload;
    currentMod.show();
  }

  function login() {
    console.log("Reached login");
    if( currentMod != jqueryMap.$login ) {
      currentMod.hide();
    }
    currentMod = jqueryMap.$login;
    currentMod.show();
  }

  // End DOM client-side router methods

  // -- end DOM-oriented methods //

  // -- Public API methods

  // Begin Public method /initModule
  initModule = function ( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.html( configMap.main_html );

    // Keep track of our elements
    setJqueryMap();


    spa.home.initModule(jqueryMap.$home);
    spa.upload.initModule(jqueryMap.$upload);
    spa.login.initModule(jqueryMap.$login);
    jqueryMap.$home.hide();
    jqueryMap.$upload.hide();
    jqueryMap.$login.hide();

    // Default content is "home" screen
    currentMod = jqueryMap.$home;

    // Set up routes
    page('/', index);
    page('/upload', upload);
    //page('/browse', browse);
    //page('/dashboard', dashboard);
    page('/login', login);
    page();

  }; // End public method initModule

  // Post API reference property
  return { initModule : initModule };
  //--- end methods exposed to public
}());
