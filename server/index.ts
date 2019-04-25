import { mergeSchemas } from "graphql-tools";
import runServer, { createRemoteSchema } from "./server-gen";

async function run() {
  const universeSchema = await createRemoteSchema(
    "https://www.universe.com/graphql/beta"
  );
  const weatherSchema = await createRemoteSchema(
    "https://5rrx10z19.lp.gql.zone/graphql"
  );
  const linkSchemaDefs = `
    extend type Event {
        location: Location
    }
  `;
  const schema = mergeSchemas({
    schemas: [universeSchema, weatherSchema, linkSchemaDefs],
    resolvers: mergeInfo => ({
      Event: {
        location: {
          fragment: `fragment EventFragment on Event {cityName}`,
          resolve(parent: any, args: any, context: any, info: any) {
            const place: string = parent.cityName;
            return mergeInfo.delegate(
              "query",
              "location",
              { place },
              context,
              info
            );
          }
        }
      }
    })
  });
  runServer(schema, 3003, {
    query: `
      query {
  event(id: "5983706debf3140039d1e8b4") {
    title
    description
    url
    location {
      city
      country
      weather {
        summary
        temperature
      }
    }
  }
}
      `
  });
}

try {
  run();
} catch (e) {
  console.log(e, e.message, e.stack);
}
