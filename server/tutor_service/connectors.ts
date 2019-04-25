import { values } from "lodash";

interface SampleType {
  Property: any;
}
const sampleData: SampleType = {
  Property: {
    p1: {
      id: "p1",
      name: "Super great hotel",
      location: {
        name: "Helsinki"
      }
    },
    p2: {
      id: "p2",
      name: "Another great hotel",
      location: {
        name: "San Francisco"
      }
    },
    p3: {
      id: "p3",
      name: "BedBugs - The Affordable Hostel",
      location: {
        name: "Helsinki"
      }
    }
  }
};

class PropertyConnector {
  getProperty(id: string) {
    return sampleData.Property[id];
  }
  getProperties(limit: number) {
    const list = values(sampleData.Property);
    if (limit) {
      return list.slice(0, limit);
    } else {
      return list;
    }
  }
}
interface ConnectorType {
  Property: PropertyConnector;
}
export { PropertyConnector, ConnectorType };
