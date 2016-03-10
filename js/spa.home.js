/*
 * spa.home.js
 * Danilo Zekovic
 * testing to display home view
 */

spa.home = (function (){
  'use strict';
  // begin local variables
  var
    configMap = {
      main_html : String()
        +     '<h2 class="content-head is-center">EXPLORE THE FASCINATING WORLD OF HISTORICAL IMAGES</h2>'
        +     '<div class="pure-g">'

        +       '<div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">'
        +         '<a href="#" class="pure-menu-link"><h3 class="content-subhead">'
        +           '<i class="fa fa-upload"></i>'
        +           'Upload Images'
        +         '</h3></a>'
        +         '<p>'
        +           'Upload images, add related information, set visibility, convert for viewing'
        +         '</p>'
        +       '</div>'

        +       '<div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">'
        +         '<a href="#" class="pure-menu-link"><h3 class="content-subhead">'
        +           '<i class="fa fa-search"></i>'
        +           'Browse The Collection'
        +         '</h3></a>'
        +         '<p>'
        +           'Search images by title, location, tags, and subject.  View with pan and zoom.  Download.'
        +         '</p>'
        +       '</div>'

        +       '<div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">'
        +         '<a href="#" class="pure-menu-link"><h3 class="content-subhead">'
        +           '<i class="fa fa-rocket"></i>'
        +           'Account Management'
        +         '</h3></a>'
        +         '<p>'
        +           'Manage your account, set image defaults, manage passwords and access.'
        +         '</p>'
        +       '</div>'

        +       '<div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">'
        +         '<a href="#" class="pure-menu-link"><h3 class="content-subhead">'
        +           '<i class="fa fa-rocket"></i>'
        +           'Get Started!!'
        +         '</h3></a>'
        +         '<p>'
        +           'Learn how to upload, tag, and manage your images using '
        +         '</p>'
        +       '</div>'

        +     '</div>'
    },

    stateMap = {
      $container : undefined
    },

    jqueryMap = {},
    initModule, serverURL, setJqueryMap;
    // end local variables

    setJqueryMap = function () {
      var $container = stateMap.$container;

      jqueryMap = {
        $container : $container
      };
    };

    // public methods
    initModule = function ( $container ) {

      console.log("home page reached");
      //set to taste
      //serverURL = 'http://localhost:4000';

      // load HTML and jquery collections
      stateMap.$container = $container;
      $container.hide();
      $container.html( configMap.main_html ).show();

      setJqueryMap();
      console.log("initModule over");

    };

    return {
      initModule  : initModule,
      //postSection : postSection
    };
}());
