/*
 * spa.shell.js
 * Danilo Zekovic
 * Main shell, basic structure of the app
*/

/* Modified to ES6 and no longer a self-executing function  BLC */
import uploadInitModule from './spaUpload'
import homeInitModule from './spaHome'
import loginInitModule from './spaLogin'
import browseInitModule from './spaBrowse'
import zoomerInitModule from './zoomer'

  let configMap = {
      main_html : String()
      + '<div class="header" >'
      +   '<div class="home-menu pure-menu pure-menu-fixed pure-menu-horizontal pure-menu-scrollable custom-menu-3 custom-can-transform" id="menu">'
      +     '<a class="pure-menu-heading" href="">Scene: History</a>'
    //  +     '<a href="#" class="custom-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>'
      +     '<ul class="pure-menu-list topnav">'
      +       '<li id="menuHome" class="pure-menu-item pure-menu-selected"><a href="/" class="pure-menu-link">Home</a></li>'
      +       '<li id="menuUp" class="pure-menu-item"><a href="/upload" class="pure-menu-link">Upload</a></li>'
      +       '<li id="menuBrowse" class="pure-menu-item"><a href="/browse" class="pure-menu-link">Browse</a></li>'
      +       '<li id="menuZoom" class="pure-menu-item"><a href="/zoomer" class="pure-menu-link">Zoomer</a></li>'
      +       '<li id="menuDash" class="pure-menu-item"><a href="/dashboard" class="pure-menu-link">Dashboard</a></li>'
      +       '<li id="menuLog" class="pure-menu-item"><a href="/login" class="pure-menu-link">Login/Sign Up</a></li>'
      +       '<li class="icon" id="threeL">'
      +         '<a href="javascript:void(0);"><i class="fa fa-bars"></i></a>'
      +       '</li>'
      +     '</ul>'
      +   '</div>'
      + '</div>'

      + '<div id="splash" class="splash-container">'
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

      +     '<section><div id="browse-view">'
      +     '</div></section>'

      +     '<section><div style="width: 800px; height: 600px;" id="zoomer-view">'
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
      + '</div>'

      + '<div class="footer l-box is-center">'
      +   'This site created and maintained by the SJC CS OSCON 2016 SPA Tutorial Team. <br>'
      +   '<i class="fa fa-github"></i> <a href="https://github.com/Danilo-Zekovic/oscon16" target="_blank">oscon16</a>'
      + '</div>'

      + '</div>'

    },

    stateMap = {
      // View state information
      $container  : undefined,
    },

    jqueryMap = {},

    currentMenu, currentMod;

  //--- end variables


  //--- Methods interacting with the DOM/jQuery

  // Begin DOM method /setJqueryMap
  let setJqueryMap = function () {
    var $container = stateMap.$container;

    // Set
    jqueryMap = {
      $container : $container,
      $splash    : $container.find('#splash'),
      $main      : $container.find('#main'),
      $home      : $container.find('#home-view'),
      $upload    : $container.find('#upload-view'),
      $browse    : $container.find('#browse-view'),
      $zoomer    : $container.find('#zoomer-view'),
      $dashboard : $container.find('#dashboard-view'),
      $login     : $container.find('#login-view'),
      $splashLog : $container.find('#login')
    };
  };
  // End DOM method /setJqueryMap

  // DOM method changeSelectedMenuItem
let changeSelectedMenuItem = function(newItem) {
    // Gotta wonder if there's not an easier way
    // This code deselects the "current" menu selection then selects the upload one
    //  Note: this doesn't use JQuery as per advice from StackOverflow
    var newItem = document.getElementById(newItem);
    if (currentMenu != newItem ) {
      currentMenu.className = currentMenu.className.replace(' pure-menu-selected', '');
      currentMenu = newItem;
      currentMenu.className += " pure-menu-selected";
    }
  }

  // Begin client-side router methods

  // Base route
  let index = function () {
    if( currentMod != jqueryMap.$home ) {
      currentMod.hide();
    }
    //currentMod.hide();
    currentMod = jqueryMap.$home;
    changeSelectedMenuItem('menuHome');
    currentMod.show();
    // Show login information again on footer
    jqueryMap.$splashLog.show();
    //jqueryMap.$home.show();
  }

  let upload = function() {
    console.log("Reached upload");
    if( currentMod != jqueryMap.$upload ) {
      changeSelectedMenuItem('menuUp');
      currentMod.hide();
      // I want to hide the splash screen - here's stuff that doesn't work
      // jqueryMap.$splash.hide();
      // console.log(jqueryMap.$splash.hasClass('splash'));
      // console.log(jqueryMap.$splash.hasClass('splash-container'));
      // jqueryMap.$splash.removeClass('splash-container');
      // console.log(jqueryMap.$splash.hasClass('splash-container'));
      currentMod = jqueryMap.$upload;
      currentMod.show();
      jqueryMap.$main.show();
    }
  }

  let login = function () {
    console.log("Reached login");
    if( currentMod != jqueryMap.$login ) {
      changeSelectedMenuItem('menuLog');
      // Hide current main content
      currentMod.hide();
      // In this case we also have to hide the "#login" div
      jqueryMap.$splashLog.hide();
      currentMod = jqueryMap.$login;
      currentMod.show();
    }
  }

  let browse = function () {
    console.log("Reached browse");
    if( currentMod != jqueryMap.$browse ) {
      changeSelectedMenuItem('menuBrowse');
      // Hide current main content
      currentMod.hide();
      // In this case we also have to hide the "#login" div
      jqueryMap.$splashLog.hide();
      currentMod = jqueryMap.$browse;
      currentMod.show();
    }
  }

  let zoomer = function () {
    console.log("Reached zoomer");
    if( currentMod != jqueryMap.$zoomer ) {
      changeSelectedMenuItem('menuZoom');
      // Hide current main content
      currentMod.hide();
      // In this case we also have to hide the "#login" div
      jqueryMap.$splashLog.hide();
      currentMod = jqueryMap.$zoomer;
      currentMod.show();
    }
  }

  // End DOM client-side router methods

  // -- end DOM-oriented methods //

  // -- Public API methods

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  let addResponsiveToMenu = function() {
      document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
  }

  // Begin Public method /initModule
  export default function shellInitModule ( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;

    // Needed
    $container.html( configMap.main_html );

    // Keep track of our elements
    setJqueryMap();

    // All of this will fall under a controller
    homeInitModule(jqueryMap.$home);
    uploadInitModule(jqueryMap.$upload);
    browseInitModule(jqueryMap.$browse);
    zoomerInitModule(jqueryMap.$zoomer);

    // Set up content for both #login and #login-view divs
    loginInitModule(jqueryMap.$login);
    loginInitModule(jqueryMap.$splashLog);

    // See http://stackoverflow.com/questions/22061595/how-to-show-hide-reactjs-components
    jqueryMap.$home.hide();
    jqueryMap.$upload.hide();
    jqueryMap.$browse.hide();
    jqueryMap.$login.hide();
    jqueryMap.$zoomer.hide();

    // Default content is "home" screen
    currentMod = jqueryMap.$home;
    // And default menu item is the home selectin
    currentMenu = document.getElementById('menuHome');

    // Set up routes
    page('/', index);
    page('/upload', upload);
    page('/browse', browse);
    page('/zoomer', zoomer);
    //page('/dashboard', dashboard);
    page('/login', login);
    page();

    // event hendling
    document.getElementById("threeL").addEventListener("click", addResponsiveToMenu);

  } // End public method initModule
