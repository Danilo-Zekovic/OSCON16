/*
 * spa.home.js
 * Danilo Zekovic
 * testing to display home view
 */

spa.upload = (function (){
  'use strict';
  let React = require('react');
  let ReactDOM = require('react-dom');
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
  var ProductCategoryRow = React.createClass({
        render: function() {
          return (<tr><th colSpan="2">{this.props.category}</th></tr>);
        }
      });

  var ProductRow = React.createClass({
    render: function() {
      var name = this.props.product.restricted ?
        this.props.product.name :
        <span style={{color: 'red'}}>
          {this.props.product.name}
        </span>;
      return (
        <tr>
          <td>{name}</td>
          <td>{this.props.product.Circa}</td>
        </tr>
      );
    }
  });

  var ProductTable = React.createClass({
    render: function() {
      var rows = [];
      var lastCategory = null;
      this.props.products.forEach(function(product) {
        if (product.category !== lastCategory) {
          rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
      });
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Circa</th>
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

  var FilterableProductTable = React.createClass({
    render: function() {
      return (
        <div>
          <SearchBar />
          <ProductTable products={this.props.products} />
        </div>
      );
    }
  });


  var PRODUCTS = [
    {category: 'RPPC Postcards', Circa: '1889', restricted: true, name: 'IroquoisBridge.tif'},
    {category: 'RPPC Postcards', Circa: '1906', restricted: true, name: 'GangwerHotel.tif'},
    {category: 'RPPC Postcards', Circa: '1914', restricted: false, name: 'HannaWest.png'},
    {category: 'Family Photos B/W', Circa: '1936', restricted: true, name: 'JAWilliams2.tif'},
    {category: 'Family Photos B/W', Circa: '1922', restricted: false, name: 'Dawson1922.png'},
    {category: 'Family Photos B/W', Circa: '1950', restricted: true, name: 'PowlerReunion.tif'}
  ];
  ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
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
