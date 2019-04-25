import { GraphQLScalarType, Kind } from "graphql";
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

interface Args {
  key: string;
}
interface GenericType {
  id: string;
  limit: number;
  context: any;
}
interface RootType {
  [key: string]: string;
}
const propertyResolvers = {
  Query: {
    propertyById(root: RootType, { id }: GenericType, context: ConnectorType) {
      return context.Property.getProperty(id);
    },

    properties(root: RootType, { limit }: GenericType, context: ConnectorType) {
      return context.Property.getProperties(limit);
    },

    contextTest(root: RootType, args: Args, context: RootType) {
      return JSON.stringify(context[args.key]);
    },

    dateTimeTest() {
      return "1987-09-25T12:00:00";
    }
  },
  DateTime
};

export default propertyResolvers;
