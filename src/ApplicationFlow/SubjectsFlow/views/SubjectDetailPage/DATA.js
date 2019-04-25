export default {
  certification_form: {
    form: {
      name: {
        type: "CharField",
        kwargs: {
          required: true,
          label: "Name of Training"
        },
        error_messages: {
          required: "This field is required"
        }
      },
      company: {
        type: "CharField",
        kwargs: {
          required: true,
          label: "Name of Organization"
        },
        error_messages: {
          required: "This field is required"
        }
      },
      year: {
        type: "CharField",
        kwargs: {
          required: true,
          label: "Year of training"
        },
        error_messages: {
          required: "Select a year"
        }
      }
    }
  }
};
