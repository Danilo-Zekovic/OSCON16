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
        +     '<h2 class="content-head is-center">Excepteur sint occaecat cupidatat.</h2>'
        +     '<div class="pure-g">'
        
        +       '<div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">'
        +         '<a href="#" class="pure-menu-link"><h3 class="content-subhead">'
        +           '<i class="fa fa-upload"></i>'
        +           'Upload Pictures'
        +         '</h3></a>'
        +         '<p>'
        +           'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
        +         '</p>'
        +       '</div>'

        +       '<div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">'
        +         '<a href="#" class="pure-menu-link"><h3 class="content-subhead">'
        +           '<i class="fa fa-search"></i>'
        +           'Serach Pictures'
        +         '</h3></a>'
        +         '<p>'
        +           'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
        +         '</p>'
        +       '</div>'

        +       '<div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">'
        +         '<a href="#" class="pure-menu-link"><h3 class="content-subhead">'
        +           '<i class="fa fa-rocket"></i>'
        +           'Get Started Quickly'
        +         '</h3></a>'
        +         '<p>'
        +           'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.'
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
