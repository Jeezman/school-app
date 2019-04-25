// @flow
import React from "react";
import { Col as Column, Row } from "react-grid-system";
import styled from "styled-components";
import { InputAddon } from "../../components/simple/InputAddon";
import Flag from "../../components/simple/CountryFlag";
import SFlag from "../../components/simple/Flag";
import FormComponent from "../components/FormComponent";
import {
  Select as FormSelect,
  Option,
  StyledMenu
} from "../../components/simple/Select";
import FormInput from "../../components/simple/Input";
import ErrorBlock from "../components/ErrorBlock";
import SpecialColumn from "../components/SpecialColumn";
import SecondaryPhoneNumber from "../components/NoticeAction";
type Props = {
  countries: Array<{
    locale: string,
    text: string,
    code: string
  }>,
  errorMessageForField: Function,
  fieldHasError: Function,
  updateGlobalData: Function,
  customErrorMessages: Function,
  value: {
    country: string,
    phone_numbers: Array<{
      number: string,
      primary: boolean
    }>
  }
};
const Menu = styled(StyledMenu)`
  & ul {
    left: -2.5em;
    width: calc(115%);
  }
`;
const CountryOption = styled.div`
  display: flex;
  & i {
    position: relative;
    padding-top: 3px;
  }
`;
const CountryInput = ({ value, countries, onChange }) => {
  return (
    <InputAddon noColumn style={{ marginBottom: 10 }}>
      <Flag>
        <SFlag style={{ padding: 13 }} name="ng" />
      </Flag>
      <FormSelect SelectMenu={Menu} noColumn onChange={onChange} value={value}>
        {countries.map((country, ind) => (
          <Option key={"country" + ind} value={country.locale}>
            <CountryOption>
              <SFlag name="ng" />
              {country.text}
            </CountryOption>
          </Option>
        ))}
      </FormSelect>
    </InputAddon>
  );
};

class PhoneNumberSet extends React.Component<Props> {
  state = {
    primary_number: "",
    secondary_number: "",
    country: "NG",
    openSecondary: false
  };
  componentDidMount() {
    const { value: { phone_numbers, country } } = this.props;
    const primary = phone_numbers.find(x => x.primary);
    const secondary = phone_numbers.find(x => !x.primary);
    if (primary) {
      this.setState(state => ({ ...state, primary_number: primary.number }));
    }
    if (secondary) {
      this.setState(state => ({
        ...state,
        secondary_number: secondary.number
      }));
    }
    if (country) {
      this.setState(state => ({ ...state, country }));
    }
  }
  updateGlobalState(state, key, value) {
    this.props.updateGlobalData({ ...state, [key]: value });
  }
  //Todo: Test
  convertToArray(state) {
    let result = [];
    const { primary_number, secondary_number } = state;
    if (primary_number) {
      result.push({ number: primary_number, primary: true });
    }
    if (secondary_number) {
      result.push({ number: secondary_number, primary: false });
    }
    return result;
  }
  updateStateForNumbers(number, key) {
    this.setState(state => {
      const newState = { ...state, [key]: number };
      this.updateGlobalState({
        country: this.state.country,
        phone_numbers: this.convertToArray(newState)
      });
      return newState;
    });
  }
  updatePhoneNumber = (value: string, key: string) => {
    this.updateStateForNumbers(value, key);
  };
  updateCountry = (country: string) => {
    this.setState(state => ({ ...state, country }));
    this.updateStateForNumbers(country, "country");
  };
  getCountryValue = (value, key = "locale") => {
    const { countries } = this.props;
    let index = countries.findIndex(o => o[key] === value);
    return countries[index];
  };
  singleSet(instance: string, label: string = "Primary Phone Number") {
    const { errorMessageForField, fieldHasError } = this.props;
    console.log(fieldHasError("phone_numbers", instance));
    return (
      <FormComponent
        noColumn
        label={label}
        error_message={errorMessageForField("phone_numbers", instance)}
        error={fieldHasError("phone_numbers", instance)}
        className="ind-items"
      >
        <InputAddon noColumn style={{ marginBottom: 10 }}>
          <Flag>
            <div>{this.getCountryValue(this.state.country).code}</div>
          </Flag>
          <FormInput
            className="add-on__input"
            width={100 - 13.5}
            value={this.state[instance]}
            onChange={e => this.updatePhoneNumber(e.target.value, instance)}
            placeholder="8078368264"
          />
        </InputAddon>
      </FormComponent>
    );
  }
  render() {
    const {
      countries,
      fieldHasError,
      customErrorMessages,
      display_error
    } = this.props;
    const country_primary_error = customErrorMessages(
      "country",
      "phone_numbers"
    );
    return (
      <Column>
        <Row>
          <SpecialColumn>
            <FormComponent
              noColumn
              label="Country"
              error_message={customErrorMessages("country")}
              error={fieldHasError("country")}
            >
              <CountryInput
                onChange={this.updateCountry}
                value={this.getCountryValue(this.state.country).text}
                countries={countries}
              />
            </FormComponent>
            {this.singleSet("primary_number")}
          </SpecialColumn>
          {display_error && country_primary_error ? (
            <Column className="c-errmessage">
              <ErrorBlock>{country_primary_error}</ErrorBlock>
            </Column>
          ) : null}
        </Row>

        <SecondaryPhoneNumber
          condition={this.state.openSecondary}
          buttonText=" Add Another Phone"
          conditionNode={this.singleSet(
            "secondary_number",
            "Alternate phone Number"
          )}
          onClick={() =>
            this.setState(state => ({ ...state, openSecondary: true }))
          }
        >
          <div>
            <h2>Have another phone number?</h2>
            <p>
              Add a second number so we can reach you in case the primary no.
              isn’t reachable
            </p>
          </div>
        </SecondaryPhoneNumber>
      </Column>
    );
  }
}
export default PhoneNumberSet;
