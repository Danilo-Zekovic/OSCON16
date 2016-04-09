# OSCON16
Official Spa that will be used as an example app for OSCON 2016

Requirements:

* Global install of webpack
* MongoDB installed and running

To install and run:

* Inside the oscon16 dir run: `npm install`  

* To start server: `npm start`
or `forever start --uid 'oscon' -c "npm start" .`

* Open your browser and go to localhost:5000        



Current version of the SPA can be found at http://oscon-sb.saintjoe-cs.org:5000

Note: upload branch now actually supports uploads.  In order to run the webpack
dev server (which cannot do uploads) the dev server now runs on port 5001.  You
must start the *regular* server before the dev server.  The dev server will
proxy the regular server to provide file upload services.
