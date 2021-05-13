// Bruna Bispo Abatepaulo - 101200299
// COMP 3133 - Assignment 01

const express = require('express');
const mongoose = require('mongoose');
const TypeDefs = require('./schemas/schema');
const Resolvers = require('./resolvers/resolvers');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

//Store sensetive information to env variables
const dotenv = require('dotenv');
dotenv.config();

// MongoDB Atlas Connection String
const url = process.env.MONGODB_URL;

//Connect to mongoDB Atlas
const connect = mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then((db) => {
    console.log('Connected correctly to server!');
}, (err) => {
    console.log(err);
});

//Define Apollo Server
const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
});

//Define Express Server
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: process.env.PORT }, () => console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));