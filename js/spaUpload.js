/*
 * spa.upload.js
 *   Handle uplads of new images
 */

'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import DropZoneComponent from 'react-dropzone-component'
import http from 'http'
import marked from 'marked'

  // begin local variables
let
  // Configuration and setup for DropZoneComponent
    componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif', 'tif'],
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

    initModule, serverURL, imageNames;
    // end local variables

// React classes to fetch and display existing records
var Record = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: this.props.children };
  },
  render: function() {
  return (
    <div className="comment">
      <h5 className="commentAuthor">
        {this.props.title}
      </h5>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
    </div>
  );
}
});

let RecordManager = React.createClass({
  loadRecordsFromServer: function() {
      // IRONY: Using an AJAX call to get the GrqphQL data from server!
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          // console.log('Please print!! ' + JSON.stringify(data.data.imageRecs));
          this.setState({data: data.data.imageRecs});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadRecordsFromServer();
    // This polls the server; not quite sure why . . .
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="recordBox">
        <h4>Demographics - Pulled from MongoDB via GraphQL</h4>
        <RecordList data={this.state.data} />
      </div>
    );
  }
});
;

var RecordList = React.createClass({
  render: function() {
    var recordNodes = this.props.data.map(function(record) {
      return (
        <Record title={record.title} key={record._id}>
          {record.description}
        </Record>
      );
    });
    return (
      <div className="recordList">
        {recordNodes}
      </div>
    );
  }
});


// public method
export default function initModule ( $container ) {

  console.log("upload page reached");

  // This constitutes the whole view to the user
  ReactDOM.render(
    <div>
    <div id="data-display">
    <RecordManager url="/oscon-test?query=query+{imageRecs{_id, title, description}}"
    pollInterval={2000}
    />
    </div>
    <DropZoneComponent  config={componentConfig}
                        eventHandlers={eventHandlers}
                        djsConfig={djsConfig} />
                        </div>,
    document.getElementById('upload-view')
    );
  console.log("upload initModule over");
  };
