const addressTypeDef = `
  type Address {
    street: String
    city: String
    state: String
    zip: String
  }
`;

const propertyAddressTypeDef = `
  type Property {
    id: ID!
    name: String!
    location: Location
    address: Address
  }
`;

const propertyRootTypeDefs = `
  type Location {
    name: String!
  }

  type Query {
    propertyById(id: ID!): Property
    properties(limit: Int): [Property!]
    contextTest(key: String!): String
    dateTimeTest: DateTime
  }
`;

const propertyAddressTypeDefs = `
  scalar DateTime
  ${addressTypeDef}
  ${propertyAddressTypeDef}
  ${propertyRootTypeDefs}
`;
export default propertyAddressTypeDefs;
