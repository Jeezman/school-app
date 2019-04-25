import runServer, { createSchema } from "../server-gen";
import bookingAddressTypeDefs from "./schema";
import bookingResolvers from "./resolvers";
import {
  BookingConnector,
  VehicleConnector,
  CustomerConnector
} from "./connectors";
const schema = createSchema(bookingAddressTypeDefs, bookingResolvers);

runServer(
  {
    schema,
    context: {
      Booking: new BookingConnector(),
      Customer: new CustomerConnector(),
      Vehicle: new VehicleConnector()
    }
  },
  3004
);
