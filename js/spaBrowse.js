/*
 * spa.upload.js
 *   Handle uplads of new images
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Griddle from 'griddle-react'

// private methods

// Options for Griddle table generator
let  columnMeta = [
  {
    "columnName": "title",
    "displayName": "Image Title"
  },
  {
    "columnName": "filename",
    "displayName": "Filename"
  },
  {
    "columnName": "description",
    "displayName": "Description"
  }
 ];

// We have hijacked the semantics of this element and patched in Griddle
let InfoTable = React.createClass({
  // IRONY: Using an AJAX call to get the GrqphQL data from server!
  loadRecordsFromServer: function() {
      $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // console.log('Please print!! ' + JSON.stringify(data.data.imageRecs));
        this.setState({records: data.data.imageRecs});
        }.bind(this),
          error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },
  getInitialState: function() {
    return {records: []};
  },
  componentDidMount: function() {
    this.loadRecordsFromServer();
    // This polls the server; not quite sure why . . .
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div>
        <center><h2>Current image data</h2></center>
        <SearchBar />
        <Griddle results={this.state.records}
          columns={['title','filename', "description"]}
          columnMetadata={columnMeta}
          showSettings={true}
          />
      </div>
    )}
  });

// Currently doesn't do anything
let SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search...disabled" />
        <p>
          <input type="checkbox" />
          {' '}
          Only show public records
        </p>
      </form>
      );
    }
  });

// This component is also currently non-functional
let FilterableInfoTable = React.createClass({
  render: function() {
    return (
      <div>
        <InfoTable
          url="/oscon-test?query=query+{imageRecs{_id, title, filename, description}}"
          />
      </div>
      );
    }
  });

// end private members

// public methods
export default function browseInitModule ( $container ) {
  console.log("browse page reached");
  ReactDOM.render(
    <FilterableInfoTable />,
    document.getElementById('browse-view')
  );
  console.log("browse initModule over");
};
