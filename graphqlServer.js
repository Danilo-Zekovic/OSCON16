import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

var app = express();

// GraphqQL server route
app.use('/oscon-test', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true
})));

// Connect mongo database
mongoose.connect('mongodb://localhost/oscon-test');

// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
