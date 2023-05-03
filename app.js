import 'dotenv/config.js'
import './config/db.js'
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import  typeDefs from "./schema/TypeDefs/index.js";
import resolvers from "./schema/Resolvers/index.js";
const {PORT}  = process.env

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: {
    port: PORT,
  },
});

console.log(`starting server on ${url}`);
