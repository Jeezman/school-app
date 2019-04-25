import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Ensure endpoint supports cors
  link: new HttpLink({ uri: "http://localhost:3006/graphql" }),
  cache: new InMemoryCache()
});

export default client;
