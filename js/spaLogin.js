/*
 * spa.login.js
 * Danilo Zekovic
 * testing to display home view
 */

  'use strict';
  // begin local variables
  var
    configMap = {
      main_html : String()
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

    },

    stateMap = {
      $container : undefined
    },

    jqueryMap = {},
    initModule, serverURL;
    // end local variables

  let  setJqueryMap = function () {
      var $container = stateMap.$container;

      jqueryMap = {
        $container : $container
      };
    };

    // public methods
    export default function initModule ( $container ) {

      console.log("login page reached");
      //set to taste
      //serverURL = 'http://localhost:4000';

      // load HTML and jquery collections
      stateMap.$container = $container;
      $container.hide();
      $container.html( configMap.main_html ).show();

      setJqueryMap();
      console.log("login initModule over");

    };
