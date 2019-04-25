import React, { Component } from "react";
const DisplayPhoneNumber = ({ number, onEdit }) => (
  <div className="clearfix">
    <div className="phone-numbers-container has-phone-numbers">
      <div className="phone-numbers-hide-during-verify">
        <div className="row">
          <div className="col-sm-12">
            <span
              id="primary_verified_no"
              className="phone-number"
              style={{ marginRight: "2px" }}
            >
              {number}
            </span>
          </div>
        </div>
        <a onClick={onEdit} className="add" href="no-script-url">
          <i className=" glyphicon glyphicon-edit" />
          Edit number
        </a>
      </div>
      <div className="phone-number-verify-widget" />
    </div>
  </div>
);

class PhoneNumberDetail extends Component {
  state = {
    editMode: false,
    number: "",
    confirm_number: ""
  };
  componentDidMount() {
    this.setState({ number: this.props.number });
  }
  onEdit = () => {
    this.setState({ editMode: true });
  };
  onChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };
  onComplete = e => {
    this.props.onVerified(this.state.number);

    this.props.this.setState({ editMode: false });
  };
  render() {
    const { number } = this.props;
    return (
      <div className="row  row-space-4 ">
        <label className="text-right col-md-3 col-sm-3" for="user_phone">
          Phone Number{" "}
          <i
            className="icon icon-lock icon-pink"
            data-behavior="tooltip"
            aria-label="Private"
          />
        </label>

        <div className="col-md-9 col-sm-9 space-for-mobile">
          {this.state.editMode ? (
            <div className="phone-verification">
              <div className="row">
                <div className="form-group col-md-5 ">
                  <input
                    className="form-control"
                    id="id_number"
                    name="number"
                    required="true"
                    type="text"
                    onChange={e => this.onChange(e, "number")}
                    value={this.state.number}
                    data-parsley-remote-message="Phone number already exists"
                    data-parsley-id="9326"
                  />
                  <span className="help-block" id="parsley-id-9326" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-5">
                  <input
                    className="form-control"
                    id="id_primary_phone_no1"
                    name="primary_phone_no1"
                    placeholder="Confirm Primary Number"
                    required="true"
                    onChange={e => this.onChange(e, "confirm_number")}
                    type="text"
                    value={this.state.confirm_number}
                    data-parsley-id="6379"
                  />
                  <span className="help-block" id="parsley-id-6379" />
                </div>

                <div className="col-md-6">
                  <button
                    onClick={this.onComplete}
                    id="verify_btn"
                    data-loading-text="Verifying..."
                    className="btn btn-primary"
                  >
                    This is my number
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <DisplayPhoneNumber number={number} onEdit={this.onEdit} />
          )}

          <div className="input-hint row-space-top-1">
            This is only shared when you have a lesson with another Tuteria
            user. It's how we all get in touch.
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneNumberDetail;
