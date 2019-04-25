import { sortAddress, getAddressValue } from "../utils";

describe("Address Components", () => {
  it("When all address components can be determined", () => {
    const sample_address = [
      { long_name: "20", short_name: "20", types: ["street_number"] },
      {
        long_name: "Joseph Harrison Street",
        short_name: "Joseph Harrison Street",
        types: ["route"]
      },
      {
        long_name: "Iwaya",
        short_name: "Iwaya",
        types: ["neighborhood", "political"]
      },
      {
        long_name: "Lagos",
        short_name: "Lagos",
        types: ["locality", "political"]
      },
      {
        long_name: "Lagos Mainland",
        short_name: "Lagos Mainland",
        types: ["administrative_area_level_2", "political"]
      },
      {
        long_name: "Lagos",
        short_name: "LA",
        types: ["administrative_area_level_1", "political"]
      },
      {
        long_name: "Nigeria",
        short_name: "NG",
        types: ["country", "political"]
      }
    ];
    expect(sortAddress(sample_address)).toEqual({
      state: "Lagos",
      vicinity: "Lagos Mainland",
      area: "Iwaya"
    });
    expect(getAddressValue(sample_address)).toEqual(
      "20 Joseph Harrison Street"
    );
  });
  it("When no vicinity or area can be determined", () => {
    const sample_address = [
      { long_name: "21", short_name: "21", types: ["street_number"] },
      { long_name: "Bawala Street", short_name: "Bawala St", types: ["route"] },
      {
        long_name: "Lagos",
        short_name: "Lagos",
        types: ["locality", "political"]
      },
      {
        long_name: "Lagos",
        short_name: "LA",
        types: ["administrative_area_level_1", "political"]
      },
      {
        long_name: "Nigeria",
        short_name: "NG",
        types: ["country", "political"]
      }
    ];
    expect(sortAddress(sample_address)).toEqual({
      state: "Lagos",
      vicinity: "",
      area: ""
    });
  });
  it("When only vicinity can be determined", () => {
    const simple_address = [
      {
        long_name: "Harrison Ojemen Street",
        short_name: "Harrison Ojemen St",
        types: ["route"]
      },
      {
        long_name: "Alimosho",
        short_name: "Alimosho",
        types: ["administrative_area_level_2", "political"]
      },
      {
        long_name: "Lagos",
        short_name: "LA",
        types: ["administrative_area_level_1", "political"]
      },
      {
        long_name: "Nigeria",
        short_name: "NG",
        types: ["country", "political"]
      }
    ];
    expect(sortAddress(simple_address)).toEqual({
      state: "Lagos",
      vicinity: "Alimosho",
      area: ""
    });
    expect(getAddressValue(simple_address)).toEqual("Harrison Ojemen Street");
  });
  it("Surulere", () => {
    const simple_address = [
      {
        long_name: "Surulere",
        short_name: "Surulere",
        types: ["sublocality_level_1", "sublocality", "political"]
      },
      {
        long_name: "Lagos",
        short_name: "Lagos",
        types: ["locality", "political"]
      },
      {
        long_name: "Lagos",
        short_name: "LA",
        types: ["administrative_area_level_1", "political"]
      },
      {
        long_name: "Nigeria",
        short_name: "NG",
        types: ["country", "political"]
      }
    ];
    expect(sortAddress(simple_address)).toEqual({
      state: "Lagos",
      vicinity: "",
      area: ""
    });
    expect(getAddressValue(simple_address)).toEqual("");
  });
});
