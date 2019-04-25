import { Kind, GraphQLScalarType } from "graphql";
import { ConnectorType } from "./connectors";
function coerceString(value: Array<any>) {
  if (Array.isArray(value)) {
    throw new TypeError(
      `String cannot represent an array value: [${String(value)}]`
    );
  }
  return String(value);
}

const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "Simple fake datetime",
  serialize: coerceString,
  parseValue: coerceString,
  parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : null;
  }
});

const bookingResolvers = {
  Query: {
    bookingById(_: Parent, { id }: Parent, context: ConnectorType) {
      return context.Booking.getBookingById(id);
    },
    bookingsByPropertyId(
      parent: Parent,
      { propertyId, limit }: BookingArgs,
      context: ConnectorType
    ) {
      return context.Booking.getBookingForProperty(propertyId, limit);
    },

    customerById(parent: Parent, { id }: Parent, context: ConnectorType) {
      return context.Customer.getCustomer(id);
    },
    bookings(parent: Parent, { limit }: BookingArgs, context: ConnectorType) {
      return context.Booking.getAllBookings(limit);
    },

    customers(parent: Parent, { limit }: BookingArgs, context: ConnectorType) {
      return context.Customer.getAllCustomers(limit);
    }
  },

  Mutation: {
    addBooking(
      parent: Parent,
      { input: { propertyId, customerId, startTime, endTime } }: InputData
    ) {
      return {
        id: "newId",
        propertyId,
        customerId,
        startTime,
        endTime
      };
    }
  },

  Booking: {
    customer(parent: Parent, _: Parent, context: ConnectorType) {
      return context.Customer.getCustomer(parent.customerId);
    }
  },

  Customer: {
    bookings(parent: Parent, _: Parent, context: ConnectorType) {
      return context.Booking.getBookingForCustomer(parent.id);
    },
    vehicle(parent: Parent, _: Parent, context: ConnectorType) {
      return context.Vehicle.getVehicle(parent.vehicleId);
    }
  },

  Vehicle: {
    __resolveType(parent: Parent) {
      if (parent.licensePlate) {
        return "Car";
      } else if (parent.bikeType) {
        return "Bike";
      } else {
        throw new Error("Could not resolve Vehicle type");
      }
    }
  },

  DateTime
};
interface Parent {
  licensePlate: string;
  bikeType: string;
  vehicleId: string;
  id: string;
  customerId: string;
}
interface InputData {
  input: InputType;
}
interface InputType {
  propertyId: string;
  customerId: string;
  startTime: string;
  endTime: string;
}
interface BookingArgs {
  propertyId: string;
  limit: number;
}
export default bookingResolvers;
