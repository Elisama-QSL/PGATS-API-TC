require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const userRoutes = require('./routes/userRoutes');
const { schema, root } = require('./graphql/schema');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/graphql', graphqlHTTP({ schema, rootValue: root, graphiql: true }));

module.exports = app;
