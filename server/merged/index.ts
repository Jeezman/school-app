import { mergeSchemas } from "graphql-tools";
import runServer, { createRemoteSchema } from "../server-gen";

async function run() {
  const quizSchema = await createRemoteSchema("http://localhost:3004/graphql");
  const tutorSchema = await createRemoteSchema("http://localhost:3005/graphql");
  const linkSchemaDefs = `
    extend type Booking {
        property: Property
    }
     extend type Property {
      bookings(limit: Int): [Booking]
    }
  `;

  const schema = mergeSchemas({
    schemas: [quizSchema, tutorSchema, linkSchemaDefs],

    resolvers: mergeInfo => ({
      Property: {
        bookings: {
          fragment: "fragment PropertyFragment on Property { id }",
          resolve(parent, args, context, info) {
            return mergeInfo.delegate(
              "query",
              "bookingsByPropertyId",
              {
                propertyId: parent.id,
                limit: args.limit ? args.limit : null
              },
              context,
              info
            );
          }
        }
      },
      Booking: {
        property: {
          fragment: "fragment BookingFragment on Booking { propertyId }",
          resolve(parent, args, context, info) {
            return mergeInfo.delegate(
              "query",
              "propertyById",
              {
                id: parent.propertyId
              },
              context,
              info
            );
          }
        }
      }
    })
  });
  runServer({ schema }, 3006);
}

try {
  run();
} catch (e) {
  console.log(e, e.message, e.stack);
}
