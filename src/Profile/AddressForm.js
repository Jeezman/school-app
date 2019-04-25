import React from "react";

class AddressForm extends React.Component {
  state = {
    address: "",
    vicinity: "",
    state: ""
  };
  componentDidMount() {
    const { address = "", vicinity = "", state = "" } = this.props.location;
    this.setState({
      address,
      vicinity,
      state
    });
    // this.setState({
    //   address:address,
    //   vicinity:vicinity,
    //   state:state
    // })
  }
  onformInputChange = (event, value) => {
    var text = event.target.value;
    this.setState({ [value]: text });
    this.props.validAddress(this.state);
  };

  render() {
    const location = this.state;
    const states = [
      "Abia",
      "Abuja",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bayelsa",
      "Bauchi",
      "Benue",
      "Borno",
      "Cross River",
      "Delta",
      "Edo",
      "Ebonyi",
      "Ekiti",
      "Enugu",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nassawara",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara"
    ];

    return (
      <div>
        <span className="font-head space-for-mobile padding-bottom-10">
          Current Location
        </span>
        <p>
          Enter your current location. This should be the address where you will
          be attending lessons from. If you move to a new location, you must
          update it here. Please write it properly.
        </p>

        <div>
          <label>Street Address</label>
        </div>
        <input
          className="form-control"
          id="id_location_set-0-address"
          maxlength="120"
          name="location_set-0-address"
          placeholder="E.g 28 Saint John Street Gowon Estate Ipaja"
          required="true"
          type="text"
          onChange={e => this.onformInputChange(e, "address")}
          value={location.address}
          autocomplete="off"
        />
        <span className="help-block" id="parsley-id-8321" />
        <div className="form-inline row-space-top-1">
          <div className="form-group">
            <div>
              <label>Town or City</label>
            </div>
            <input
              className="form-control"
              id="id_location_set-0-vicinity"
              maxlength="80"
              name="location_set-0-vicinity"
              placeholder="E.g. Ipaja"
              required="true"
              type="text"
              onChange={e => this.onformInputChange(e, "vincinity")}
              value={location.vicinity}
            />
            <span className="help-block" />
          </div>
          <div className="form-group">
            <div>
              <label>State</label>
            </div>
            <select
              className="form-control"
              id="id_location_set-0-state"
              name="location_set-0-state"
              placeholder="Input your state"
              required="true"
              onChange={e => this.onformInputChange(e, "state")}
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <span className="help-block" />
          </div>

          <div className="form-group hidden">
            <div className="">
              <label>Region</label>
            </div>
          </div>
        </div>

        <div className="input-hint">
          Only you can see this and it is never shared with anyone.
        </div>
      </div>
    );
  }
}

export default AddressForm;
