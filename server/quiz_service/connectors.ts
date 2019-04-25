import { values } from "lodash";
interface SampleType {
  Booking: any;
  Customer: any;
  Vehicle: any;
}
const sampleData: SampleType = {
  Booking: {
    b1: {
      id: "b1",
      propertyId: "p1",
      customerId: "c1",
      startTime: "2016-05-04",
      endTime: "2016-06-03"
    },
    b2: {
      id: "b2",
      propertyId: "p1",
      customerId: "c2",
      startTime: "2016-06-04",
      endTime: "2016-07-03"
    },
    b3: {
      id: "b3",
      propertyId: "p1",
      customerId: "c3",
      startTime: "2016-08-04",
      endTime: "2016-09-03"
    },
    b4: {
      id: "b4",
      propertyId: "p2",
      customerId: "c1",
      startTime: "2016-10-04",
      endTime: "2016-10-03"
    }
  },

  Customer: {
    c1: {
      id: "c1",
      email: "examplec1@example.com",
      name: "Exampler Customer",
      vehicleId: "v1"
    },
    c2: {
      id: "c2",
      email: "examplec2@example.com",
      name: "Joe Doe",
      vehicleId: "v2"
    },
    c3: {
      id: "c3",
      email: "examplec3@example.com",
      name: "Liisa Esimerki",
      address: "Esimerkikatu 1 A 77, 99999 Kyyjarvi"
    }
  },

  Vehicle: {
    v1: {
      id: "v1",
      bikeType: "MOUNTAIN"
    },
    v2: {
      id: "v2",
      licensePlate: "GRAPHQL"
    }
  }
};

function filterValue(array: Array<any>, key: string, value: string) {
  return values(array).filter(booking => booking[key] === value);
}
class BookingConnector {
  getBookingById(id: string) {
    return sampleData.Booking[id];
  }
  getBookingForProperty(propertyId: string, limit: number) {
    const list = filterValue(sampleData.Booking, "properyId", propertyId);
    if (limit) {
      return list.slice(0, limit);
    } else {
      return list;
    }
  }
  getBookingForCustomer(id: string) {
    return filterValue(sampleData.Booking, "customerId", id);
  }
  getAllBookings(limit: number) {
    const list = values(sampleData.Booking);
    if (limit) {
      return list.slice(0, limit);
    } else {
      return list;
    }
  }
}
class CustomerConnector {
  getCustomer(id: string) {
    return sampleData.Customer[id];
  }
  getAllCustomers(limit: number) {
    const list = values(sampleData.Customer);
    if (limit) {
      return list.slice(0, limit);
    } else {
      return list;
    }
  }
}
class VehicleConnector {
  getVehicle(id: string) {
    return sampleData.Vehicle[id];
  }
}
interface ConnectorType {
  Vehicle: VehicleConnector;
  Customer: CustomerConnector;
  Booking: BookingConnector;
}
export { ConnectorType, CustomerConnector, BookingConnector, VehicleConnector };
