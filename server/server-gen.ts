import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import {
  makeRemoteExecutableSchema,
  introspectSchema,
  makeExecutableSchema
} from "graphql-tools";
import GraphQLServerOptions from "apollo-server-core/dist/graphqlOptions";
import { ITypeDefinitions, IResolvers } from "graphql-tools/dist/Interfaces";

import { createApolloFetch } from "apollo-fetch";

function runServer(
  options: GraphQLServerOptions,
  port: number,
  graphiqlParams = {}
) {
  const app = express();
  app.use("*", cors({ origin: "http://localhost:3000" }));
  app.use("/graphql", bodyParser.json(), graphqlExpress(options));

  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql",
      ...graphiqlParams
    })
  );

  app.listen(port);
  console.log(
    `Server running. Open http://localhost:${port}/graphiql to run queries.`
  );
}
export const createSchema = (
  typeDefs: ITypeDefinitions,
  resolvers: IResolvers
) => makeExecutableSchema({ typeDefs, resolvers });

export const createRemoteSchema = async (uri: string) => {
  const fetcher = createApolloFetch({ uri });
  return makeRemoteExecutableSchema({
    schema: await introspectSchema(fetcher),
    fetcher
  });
};
export default runServer;
