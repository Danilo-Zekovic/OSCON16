/*
 * spa.upload.js
 *   Handle uplads of new images
 */

spa.upload = (function (){
  'use strict';
  let React = require('react');
  let ReactDOM = require('react-dom');
  let DropZoneComponent = require('react-dropzone-component');

  // begin local variables
  var
    // Configuration and setup for DropZoneComponent
    componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif','tif'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler'
    },
    eventHandlers = {
    // This one receives the dropzone object as the first parameter
    // and can be used to additional work with the dropzone.js
    // object
    init: null,
    // All of these receive the event as first parameter:
    drop: null,
    dragstart: null,
    dragend: null,
    dragenter: null,
    dragover: null,
    dragleave: null,
    // All of these receive the file as first parameter:
    addedfile: null,
    removedfile: null,
    thumbnail: null,
    error: null,
    processing: null,
    uploadprogress: null,
    sending: null,
    success: null,
    complete: null,
    canceled: null,
    maxfilesreached: null,
    maxfilesexceeded: null,
    // All of these receive a list of files as first parameter
    // and are only called if the uploadMultiple option
    // in djsConfig is true:
    processingmultiple: null,
    sendingmultiple: null,
    successmultiple: null,
    completemultiple: null,
    canceledmultiple: null,
    // Special Events
    totaluploadprogress: null,
    reset: null,
    queuecomplete: null
  },
    djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif,image/tiff"
    },

    // Legacy code
    configMap = {
      main_html : String()
        +     '<h2 class="content-head is-center">UPLOAD YOUR images</h2>'
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

    // Figure out later where these belong
    // var React = require('react');
    // var Router = require('react-router');

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

  // This example pilfered from "Thinking in React" on the React website
  // This is a comment that means nothing
  var ImageCategoryRow = React.createClass({
        render: function() {
          return (<tr><th colSpan="2">{this.props.category}</th></tr>);
        }
      });

  var ImageRow = React.createClass({
    render: function() {
      var name = this.props.image.restricted ?
        this.props.image.name :
        <span style={{color: 'red'}}>
          {this.props.image.name}
        </span>;
      return (
        <tr>
          <td>{name}</td>
          <td>{this.props.image.circa}</td>
        </tr>
      );
    }
  });

  var ImageTable = React.createClass({
    render: function() {
      var rows = [];
      var lastCategory = null;
      this.props.images.forEach(function(image) {
        if (image.category !== lastCategory) {
          rows.push(<ImageCategoryRow category={image.category} key={image.category} />);
        }
        rows.push(<ImageRow image={image} key={image.name} />);
        lastCategory = image.category;
      });
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>circa</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  });

  var SearchBar = React.createClass({
    render: function() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show public images
          </p>
        </form>
      );
    }
  });

  var FilterableImageTable = React.createClass({
    render: function() {
      return (
        <div>
          <SearchBar />
          <ImageTable images={this.props.images} />
          <DropZoneComponent  config={componentConfig}
                              eventHandlers={eventHandlers}
                              djsConfig={djsConfig} />
        </div>
      );
    }
  });


  var IMAGES = [
    {category: 'RPPC Postcards', circa: '1889', restricted: true, name: 'IroquoisBridge.tif'},
    {category: 'RPPC Postcards', circa: '1906', restricted: true, name: 'GangwerHotel.tif'},
    {category: 'RPPC Postcards', circa: '1914', restricted: false, name: 'HannaWest.png'},
    {category: 'Family Photos B/W', circa: '1936', restricted: true, name: 'JAWilliams2.tif'},
    {category: 'Family Photos B/W', circa: '1922', restricted: false, name: 'Dawson1922.png'},
    {category: 'Family Photos B/W', circa: '1950', restricted: true, name: 'PowlerReunion.tif'}
  ];
  ReactDOM.render(
    <FilterableImageTable images={IMAGES} />,
    document.getElementById('upload-view')
  );
      // $container.html( configMap.main_html ).show();

      setJqueryMap();
      console.log('Does react exist? ' + typeof(React));
      console.log("upload initModule over");

    };

    return {
      initModule  : initModule,
      //postSection : postSection
    };
}());
