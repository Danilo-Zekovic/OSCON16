/*
 * spa.home.js
 * Danilo Zekovic
 * testing to display home view
 */

spa.upload = (function (){
  'use strict';
  let React = require('react');
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

// This code is going to help me bootstrap the Reactification of the SPA
/*
    var ProductCategoryRow = React.createClass({
      render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
      }
    });

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
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
            <th>Price</th>
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
          Only show products in stock
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
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
*/

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
      console.log('Does react exist? ' + typeof(React));
      console.log("upload initModule over");

    };

    return {
      initModule  : initModule,
      //postSection : postSection
    };
}());
