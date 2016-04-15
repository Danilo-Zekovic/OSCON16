/*
 * spa.login.js
 * Danilo Zekovic
 * testing to display login view
 */

 import React from 'react'
 import ReactDOM from 'react-dom'
 import Griddle from 'griddle-react'


 let Login = React.createClass({
   render: function() {
     return (
       <h2 className="content-head is-center">Sign up now.  Help us preserve historical images.</h2>
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
