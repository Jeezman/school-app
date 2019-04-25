import runServer, { createSchema } from "../server-gen";
import propertyAddressTypeDefs from "./schema";
import propertyResolvers from "./resolvers";
import { PropertyConnector } from "./connectors";
const schema = createSchema(propertyAddressTypeDefs, propertyResolvers);

runServer(
  {
    schema,
    context: {
      Property: new PropertyConnector()
    }
  },
  3005
);
