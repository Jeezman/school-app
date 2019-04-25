import DATA from "../DATA";
import { allErrorMessages } from "../utils";

describe("Error messages ", () => {
  describe("of all values in PersonalInfoPage ", () => {
    let state = {
      first_name: "Biola",
      last_name: "Oyeniyi",
      email: "james@example.com",
      dob: {
        day: 10,
        month: 3,
        year: 1998
      },
      phone_numbers: [
        {
          number: "07035209988",
          primary: true
        },
        {
          number: "08033002324",
          primary: false
        }
      ],
      country: "NG",
      gender: "M"
    };

    it("when data has all valid items", () => {
      const result = allErrorMessages(state, DATA);
      expect(result).toEqual({});
    });
    it("when data has all invalid items", () => {
      const newState = {
        ...state,
        email: "",
        first_name: "",
        last_name: "",
        dob: {},
        phone_numbers: [],
        country: "",
        gender: ""
      };
      const result = allErrorMessages(newState, DATA);
      expect(result).toEqual({
        email: ["This field is required.", "This email is invalid."],
        first_name: ["This field is required."],
        last_name: ["This field is required."],
        dob: [
          {
            day: "A day is required."
          },
          {
            month: "A month is required."
          },
          {
            year: "A year is required."
          }
        ],
        phone_numbers: {
          primary_number: [
            "This field is required.",
            "Enter a valid phone number."
          ]
        },
        country: ["Select one of the choices provided."],
        gender: ["Select one of the choices provided."]
      });
    });
    it("when data has some invalid items", () => {
      const newState = {
        ...state,
        email: "jamomni",
        country: ""
      };
      const result = allErrorMessages(newState, DATA);
      expect(result).toEqual({
        email: ["This email is invalid."],
        country: ["Select one of the choices provided."]
      });
    });
  });
});
