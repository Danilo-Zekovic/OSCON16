import OpenSeaDragon from 'openseadragon'
import Button from 'react-button'
import React from 'react'
import ReactDOM from 'react-dom'

let renderImage = function(selection) {
      // Clear out any previous contents
      document.getElementById("zoomer-view").innerHTML = "";
      // Set filename
      let baseName = selection + '.dzi';
      // Render viewer note nasty "node_modules" parameter!
      let viewer = OpenSeadragon({
        id: "zoomer-view",
        prefixUrl: "./node_modules/openseadragon/build/openseadragon/images/",
        tileSources: baseName
      });
    }
// end private members/methods

// public methods
export default function zoomerInitModule ( ) {
  let id = 'brush';
  console.log("zoomer page reached");
  let url=document.URL;
  console.log('Got URL' + url);
  let regex = /localhost:5000\/zoomer\?show=(\w+)/
  if (url.match(regex)) {
    console.log('Setting new id');
     id = url.match(regex)[1];
  }
//  let id = url.match(regex)[1];
  console.log(typeof id);
  //if (id == null ) { id = 'brush'};
    renderImage(id);
}
