export default {
  address_form: {
    address: {
      type: "CharField",
      kwargs: {
        required: true,
        label: "Home Address"
      },
      error_messages: {
        required: "This field is required"
      }
    },
    state: {
      type: "TypedChoiceField",
      kwargs: {
        required: true,
        choices: [
          ["Abia", "Abia"],
          ["Abuja", "Abuja"],
          ["Adamawa", "Adamawa"],
          ["Akwa Ibom", "Akwa Ibom"],
          ["Anambra", "Anambra"],
          ["Bayelsa", "Bayelsa"],
          ["Bauchi", "Bauchi"],
          ["Benue", "Benue"],
          ["Borno", "Borno"],
          ["Cross River", "Cross River"],
          ["Delta", "Delta"],
          ["Edo", "Edo"],
          ["Ebonyi", "Ebonyi"],
          ["Ekiti", "Ekiti"],
          ["Enugu", "Enugu"],
          ["Gombe", "Gombe"],
          ["Imo", "Imo"],
          ["Jigawa", "Jigawa"],
          ["Kaduna", "Kaduna"],
          ["Kano", "Kano"],
          ["Katsina", "Katsina"],
          ["Kebbi", "Kebbi"],
          ["Kogi", "Kogi"],
          ["Kwara", "Kwara"],
          ["Lagos", "Lagos"],
          ["Nassawara", "Nassawara"],
          ["Niger", "Niger"],
          ["Ogun", "Ogun"],
          ["Ondo", "Ondo"],
          ["Osun", "Osun"],
          ["Oyo", "Oyo"],
          ["Plateau", "Plateau"],
          ["Rivers", "Rivers"],
          ["Sokoto", "Sokoto"],
          ["Taraba", "Taraba"],
          ["Yobe", "Yobe"],
          ["Zamfara", "Zamfara"]
        ],
        label: "State"
      },
      error_messages: {
        required: "Select one of the states provided"
      }
    },
    vicinity: {
      type: "CharField",
      kwargs: {
        required: true,
        label: "Vicinity"
      },
      error_messages: {
        required: "This field is required"
      }
    },
    area: {
      type: "CharField",
      kwargs: {
        required: true,
        label: "Area"
      },
      error_messages: {
        required: "This field is required",
        vicinity: "This field should be a popular area within your vicinity"
      }
    },
    latitude: {
      type: "DecimalField",
      kwargs: {
        required: true
      },
      error_messages: {
        required: "This field is required"
      }
    },
    longitude: {
      type: "DecimalField",
      kwargs: {
        required: true
      },
      error_messages: {
        required: "This field is required"
      }
    }
  }
};
