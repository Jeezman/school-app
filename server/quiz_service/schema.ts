const addressTypeDef = `
  type Address {
    street: String
    city: String
    state: String
    zip: String
  }
`;

const customerAddressTypeDef = `
  type Customer implements Person {
    id: ID!
    email: String!
    name: String!
    address: Address
    bookings(limit: Int): [Booking!]
    vehicle: Vehicle
  }
`;

const bookingRootTypeDefs = `
  scalar DateTime

  type Booking {
    id: ID!
    propertyId: ID!
    customer: Customer!
    startTime: String!
    endTime: String!
  }

  interface Person {
    id: ID!
    name: String!
  }

  union Vehicle = Bike | Car

  type Bike {
    id: ID!
    bikeType: String
  }

  type Car {
    id: ID!
    licensePlate: String
  }

  type Query {
    bookingById(id: ID!): Booking
    bookingsByPropertyId(propertyId: ID!, limit: Int): [Booking!]
    customerById(id: ID!): Customer
    bookings(limit: Int): [Booking!]
    customers(limit: Int): [Customer!]
  }

  input BookingInput {
    propertyId: ID!
    customerId: ID!
    startTime: DateTime!
    endTime: DateTime!
  }

  type Mutation {
    addBooking(input: BookingInput): Booking
  }
`;

const bookingAddressTypeDefs = `
  ${addressTypeDef}
  ${customerAddressTypeDef}
  ${bookingRootTypeDefs}
`;

export default bookingAddressTypeDefs;
