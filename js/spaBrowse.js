/*
 * spa.upload.js
 *   Handle uplads of new images
 */

import React from 'react'
import ReactDOM from 'react-dom'

// private methods  // This example pilfered from "Thinking in React" on the React website
// This is a comment that means nothing
let ImageCategoryRow = React.createClass({
      render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
      }
    });

let ImageRow = React.createClass({
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

let ImageTable = React.createClass({
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

let SearchBar = React.createClass({
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

let FilterableImageTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ImageTable images={this.props.images} />
      </div>
      );
    }
  });


  let IMAGES = [
    {category: 'RPPC Postcards', circa: '1889', restricted: true, name: 'IroquoisBridge.tif'},
    {category: 'RPPC Postcards', circa: '1906', restricted: true, name: 'GangwerHotel.tif'},
    {category: 'RPPC Postcards', circa: '1914', restricted: false, name: 'HannaWest.png'},
    {category: 'Family Photos B/W', circa: '1936', restricted: true, name: 'JAWilliams2.tif'},
    {category: 'Family Photos B/W', circa: '1922', restricted: false, name: 'Dawson1922.png'},
    {category: 'Family Photos B/W', circa: '1950', restricted: true, name: 'PowlerReunion.tif'}
  ];
// end private members

// public methods
export default function initModule ( $container ) {
  console.log("browse page reached");
  ReactDOM.render(
    <FilterableImageTable images={IMAGES} />,
    document.getElementById('browse-view')
  );
  console.log("browse initModule over");
};
