/*
 * spa.home.js
 * Danilo Zekovic
 * testing to display home view
 */

spa.upload = (function (){
  'use strict';
  // begin local variables
  var
    configMap = {
      main_html : String()
        +     '<h2 class="content-head is-center">UPLOAD YOUR IMAGES</h2>'
        +     '<div class="pure-g">'

        +     '<div class="l-box-lrg pure-u-1 pure-u-md-2-5">'
        +       '<p>Description what user is suposed to do here</p>'
        +       '<form class="pure-form pure-form-stacked">'
        +         '<fieldset>'

        +           '<label for="name">Your Name</label>'
        +           '<input id="name" type="text" placeholder="Your Name">'

        +           '<label for="time">When was it taken</label>'
        +           '<input id="time" type="text" placeholder="Time">'

        +           '<label for="location">Where was the picture taken</label>'
        +           '<input id="location" type="text" placeholder="Location?">'

        +           '<button type="submit" class="pure-button">Upload</button>'
        +         '</fieldset>'

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

      console.log("upload page reached");
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
