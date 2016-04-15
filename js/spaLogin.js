/*
 * spa.login.js
 * Danilo Zekovic
 * testing to display login view
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Griddle from 'griddle-react'


// Currently doesn't do anything
let LoginBtn = React.createClass({
  render: function() {
    return (
      <a href="/auth/google" type="submit" className="google-btn pure-button">
        <span className="fa fa-google-plus">
        </span> Google
      </a>
    )
  }
})


let Login = React.createClass({
  render: function() {
    return (
      <div>
        <h2 className="content-head is-center">Sign up now.  Help us preserve historical images.</h2>,
        <center><LoginBtn /></center>
      </div>

    )
  }
})

 // public methods
 export default function browseInitModule ( ) {
   console.log("browse init mod");
   ReactDOM.render(
     <Login/>,
     document.getElementById('login-view')
   );
   console.log("browse initModule over");
 };
