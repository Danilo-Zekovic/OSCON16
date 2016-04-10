/*
 * spa.upload.js
 *   Handle uplads of new images
 */

import React from 'react'
import ReactDOM from 'react-dom'

// private methods


// This example pilfered from "Thinking in React" on the React website

// We're not using the category component at present
let CategoryRow = React.createClass({
      render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
      }
    });

let InfoRow = React.createClass({
  render: function() {
      return (
        <tr>
          <td>{this.props.record.title}</td>
          <td>{this.props.record.filename}</td>
        </tr>
      );
    }
  });

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
    var rows = [];
    this.state.records.forEach(function(record) {
      rows.push(<InfoRow record={record} key={record._id} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Filename</th>
          </tr>
        </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  });

let SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show public records
        </p>
      </form>
      );
    }
  });

let FilterableInfoTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <InfoTable
          url="/oscon-test?query=query+{imageRecs{_id, title, filename}}"
          />
      </div>
      );
    }
  });

/*
  let RECORDS = [
    {category: 'RPPC Postcards', circa: '1889', restricted: true, name: 'IroquoisBridge.tif'},
    {category: 'RPPC Postcards', circa: '1906', restricted: true, name: 'GangwerHotel.tif'},
    {category: 'RPPC Postcards', circa: '1914', restricted: false, name: 'HannaWest.png'},
    {category: 'Family Photos B/W', circa: '1936', restricted: true, name: 'JAWilliams2.tif'},
    {category: 'Family Photos B/W', circa: '1922', restricted: false, name: 'Dawson1922.png'},
    {category: 'Family Photos B/W', circa: '1950', restricted: true, name: 'PowlerReunion.tif'}
  ];
*/

let RECORDS=[];

// end private members

// public methods
export default function browseInitModule ( $container ) {
  console.log("browse page reached");
  ReactDOM.render(
    <FilterableInfoTable records={RECORDS} />,
    document.getElementById('browse-view')
  );
  console.log("browse initModule over");
};
