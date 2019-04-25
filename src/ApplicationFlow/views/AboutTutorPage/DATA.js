export default {
  tutor_description_form: {
    years_of_experience: {
      type: "CharField",
      kwargs: {
        required: true,
        label: "Years of Experience",
        choices: [["", "----"], [1, "1 Year"], [2, "2 Years"]]
      },
      error_messages: {
        required: "This field is required."
      }
    },
    online_experience: {
      type: "TypedChoiceField",
      kwargs: {
        required: true,
        label: "Online Experience",
        choices: [["Yes", "Yes"], ["No", "No"], ["Kind of", "Kind of"]]
      },
      error_messages: {
        required: "Select one of the choices provided."
      }
    },
    title: {
      type: "CharField",
      kwargs: {
        required: true,
        maxLength: 80,
        label: "Title"
      },
      error_messages: {
        required: "This field is required.",
        maxLength: "Ensure the number of characters is less than the max"
      }
    },
    description: {
      type: "Textarea",
      kwargs: {
        required: true,
        maxLength: 500,
        minLength: 120,
        label: "Description"
      },
      error_messages: {
        required: "This field is required.",
        maxLength: "Ensure the number of characters is less than the max",
        minLength: "Ensure the number of characters is at least 120"
      }
    }
  }
};
