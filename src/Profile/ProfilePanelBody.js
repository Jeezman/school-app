import React from "react";
import AddressForm from "./AddressForm";
import PhoneNumberDetail from "./PhoneNumber";
import DateOfBirthForm from "./DateOfBirthForm";

const GeneralLabel = ({ label, isMobile = false }) => (
  <label
    className={`text-right col-md-3 col-sm-3 col-xs-4 ${
      isMobile ? "hidden-xs" : ""
    }`}
  >
    {label}
  </label>
);
const FormDetail = ({
  label,
  detail,
  hint,
  hintClass = "",
  className = "col-md-9 col-sm-9 col-xs-8 ",
  children,
  isMobile = false
}) => (
  <div className="row row-space-4">
    <GeneralLabel label={label} isMobile={isMobile} />
    <div className={className}>
      {children ? (
        children
      ) : (
        <p className="form-control-static no-padding-top">{detail}</p>
      )}

      {hint ? <span className={`${hintClass} input-hint`}>{hint}</span> : null}
    </div>
  </div>
);
class DescriptionForm extends React.Component {
  state = {
    description: ""
  };
  componentDidMount() {
    const { description = "" } = this.props;
    this.setState({
      description
    });
  }

  onDescriptionChange = event => {
    var text = event.target.value;
    this.setState({ description: text });
  };

  render() {
    return (
      <div className="col-md-9 col-sm-9">
        <textarea
          className="form-control"
          cols="40"
          data-parsley-group="default"
          data-parsley-trigger="keyup"
          id="id_description"
          name="description"
          rows="8"
          data-parsley-id="6502"
          onChange={this.onDescriptionChange}
          value={this.state.description}
        />

        <div className="col-sm-12">
          <small
            className="char-count pull-right"
            style={{ color: "rgb(255, 77, 77)" }}
          >
            <em>{this.state.description.length}</em> / 500 max
          </small>
        </div>
        <div className="input-hint row-space-top-1">
          Tuteria is built on relationships. Help other people get to know you.<br
          />
          <br />
          Tell them about the things you like: What 3 things make you happy that
          you can't do without? Share your favorite subjects, books, movies,
          music, food etc.
          <br />
          <br />
          Tell them what it'll feel like to have you as a tutor or client. What
          makes you special?
        </div>
      </div>
    );
  }
}

class ProfilePanelBody extends React.Component {
  state = {
    verified: false,
    first_name: "",
    last_name: "",
    gender: "",
    number: "",
    home_address: {}
  };
  componentDidMount() {
    const { first_name, last_name, gender, number, home_address } = this.props;
    this.setState({
      first_name,
      last_name,
      gender,
      number,
      home_address
    });
  }
  onformInputChange = (event, value) => {
    var text = event.target.value;
    this.setState({ [value]: text });
  };
  onPhoneNumberChange = value => {
    this.setState({ number: value });
  };
  onHomeAddressChange = value => {
    this.setState({ home_address: value });
  };

  render() {
    return (
      <div className="panel-body">
        {this.state.verified ? (
          <div className="when-confirmed">
            <FormDetail label="First name" detail={this.state.first_name} />
            <FormDetail
              label="Last name"
              detail={this.state.last_name}
              hint={`This is only shared when you have a confirmed lesson with another Tuteria user.`}
            />
            <FormDetail
              hint="This is never shared, only used for data analysis"
              detail="Male"
              className="col-md-3 col-sm-3 col-xs-4"
            />
            <FormDetail
              detail="19-July-1991"
              hint="Only you can see this. We use this for analysis and never share with other users"
            />
          </div>
        ) : (
          <div className="">
            <div className="row row-space-4">
              <label className="col-md-3 col-sm-3 text-right">First name</label>
              <div className="col-md-9 col-sm-9 space-for-mobile">
                <input
                  className="form-control"
                  data-parsley-group="default"
                  id="id_first_name"
                  maxlength="40"
                  name="first_name"
                  placeholder="Enter first name e.g John"
                  required=""
                  size="30"
                  type="text"
                  onChange={e => this.onformInputChange(e, "first_name")}
                  value={this.state.first_name}
                  autoComplete="off"
                />
                <span class="help-block" id="parsley-id-9145" />
                <span className="input-hint">Please write only one name</span>
              </div>
            </div>
            <div className="row  row-space-4">
              <label className="col-md-3 col-sm-3 text-right">Last name</label>

              <div className="col-md-9 col-sm-9 space-for-mobile">
                <input
                  class="form-control"
                  data-parsley-group="default"
                  id="id_last_name"
                  maxlength="40"
                  name="last_name"
                  placeholder="Enter last name e.g Smith"
                  required=""
                  size="30"
                  type="text"
                  onChange={e => this.onformInputChange(e, "last_name")}
                  value={this.state.last_name}
                  autoComplete="off"
                />
                <span className="help-block" id="parsley-id-5610" />
                <span className="input-hint">
                  This is only shared when you have a confirmed lesson with
                  another Tuteria user. Please double-check to ensure it is
                  correct.
                </span>
              </div>
            </div>

            <div className="row  row-space-4">
              <label className="col-md-3 col-sm-3 text-right">I am</label>
              <div className="col-md-4 col-sm-4 space-for-mobile">
                <select
                  className="form-control input-medium"
                  data-parsley-error-message="Pls select a sex from the dropdown"
                  data-parsley-group="default"
                  id="id_gender"
                  name="gender"
                  required="true"
                  onChange={e => this.onformInputChange(e, "gender")}
                  value={this.state.gender}
                >
                  <option value="">Gender</option>
                  <option value="M" selected="selected">
                    Male
                  </option>
                  <option value="F">Female</option>
                </select>
                <span classNamw="help-block" id="parsley-id-1808" />
                <span id="helpBlock" className="input-hint">
                  This is never shared, only used for analysis
                </span>
              </div>
            </div>
            <DateOfBirthForm />

            <div className="form-group">
              <div className="checkbox">
                <label for="id_tutor_intent">
                  <input
                    className=""
                    id="id_tutor_intent"
                    name="tutor_intent"
                    type="checkbox"
                    data-parsley-multiple="tutor_intent"
                    data-parsley-id="1878"
                  />{" "}
                  Intent to tutor
                </label>
              </div>
              <span
                className="help-block"
                id="parsley-id-multiple-tutor_intent"
              />
            </div>
          </div>
        )}

        <PhoneNumberDetail
          number={this.state.number}
          onVerified={this.onPhoneNumberChange}
        />
        <FormDetail label="Address" isMobile>
          <AddressForm
            location={this.state.home_address}
            validAddress={this.onHomeAddressChange}
          />
        </FormDetail>
        <div className="row  row-space-4">
          <label
            className="text-right col-md-3 col-sm-3 hidden-xs"
            for="user_profile_info_current_city"
          >
            Address
          </label>

          <div className="col-md-9 col-sm-9" />
        </div>

        <div className="row  row-space-4 hidden ">
          <label className="col-sm-3 text-right">Interested in tutoring?</label>
          <div className="col-sm-9 col-md-9">
            <div className="checkbox">
              <label>
                <input
                  id="id_tutor_intent"
                  name="tutor_intent"
                  type="checkbox"
                  data-parsley-multiple="tutor_intent"
                  data-parsley-id="1878"
                />
              </label>
            </div>
          </div>
        </div>

        <div className=" row  row-space-4 ">
          <label className="col-md-3 col-sm-3 text-right">
            Describe Yourself to the Tuteria Community
          </label>
          <DescriptionForm description={""} />
        </div>
      </div>
    );
  }
}

export default ProfilePanelBody;
