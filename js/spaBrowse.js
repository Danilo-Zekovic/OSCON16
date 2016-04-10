/*
 * spa.upload.js
 *   Handle uplads of new images
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Griddle from 'griddle-react'
import OpenSeaDragon from 'openseadragon'
import Button from 'react-button'

// private methods

// Options for Griddle table generator
// Save this: return <a href={url}>{this.props.data}</a>
// Note that for now we just hardcode the link target in the url variable

// Theme for our Button

let themes = Button.themes;
let theme = {
    disabledStyle: { background: 'gray'},
    overStyle: { background: 'red'},
    activeStyle: { background: 'red'},
    pressedStyle: {background: 'magenta', fontWeight: 'bold'},
    overPressedStyle: {background: 'purple', fontWeight: 'bold'}
}

let LinkComponent = React.createClass({
    render: function(){
      let url = "http://knuckle.palaver.net:3001/iroq.html";
      return <a href={url}>{this.props.data}</a>
    }
  });


let  customColumnMetadata = [
  {
    "columnName": "title",
    "displayName": "Image Title"
  },
  {
    "columnName": "filename",
    "displayName": "Filename",
    "customComponent": LinkComponent
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
        type: "POST",
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
    // Should this be a call to loadRecordsFromServer?
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
        <div id="img-box" style={{width: 800, height: 600}}>
        </div>
          <Button onClick={()=>renderImage('brush')} />
        <Griddle results={this.state.records}
          columns={['title','filename', "description"]}
          columnMetadata={customColumnMetadata}
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

  let renderImage = function(selection) {
        // Clear out any previous contents
        //document.getElementById("browse-view").innerHTML = "";
        // Set filename
        let baseName = selection + '.dzi';
        // Render viewer note nasty "node_modules" parameter!
        let viewer = OpenSeadragon({
          id: "img-box",
          prefixUrl: "./node_modules/openseadragon/build/openseadragon/images/",
          tileSources: baseName
        });
      }
// end private members/methods

// public methods
export default function browseInitModule ( ) {
  console.log("browse page reached");
  ReactDOM.render(
    <InfoTable
      url="/oscon-test?query=query+{imageRecs{_id, title, filename, description}}"/>,
    document.getElementById('browse-view')
  );
  console.log("browse initModule over");
};
