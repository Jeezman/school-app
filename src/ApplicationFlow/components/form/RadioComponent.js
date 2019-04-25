import React from "react";
import styled from "styled-components";
import { Radio } from "../simple/CheckInput";
import FormComponent from "../simple/FormComponent";

const RadioButton = styled.div`
  display: inline-block;
  & label {
    margin-right: 12px;
    & .control__indicator:checked {
      border: 2px solid #ffffff;
    }
  }
`;
export const RadioButtonContainer = RadioButton.extend`
  display: block;
`;

class RadioComponent extends React.Component {
  state = {
    value: this.props.value
  };
  onChange = e => {
    const value = e.target.value;
    const checked = e.target.checked;
    this.setState({ value: value });
    this.props.onChange(value, checked);
  };
  componentWillReceiveProps(nextProps) {
    if (!!nextProps.value === false) {
      if (this.state.value === "Yes") {
        this.props.onChange(this.state.value, true);
      }
    }
  }
  render() {
    const { options, onChange, isChecked, name, ...rest } = this.props;
    return (
      <FormComponent {...rest}>
        <RadioButtonContainer>
          {options.map((option, index) => {
            const text = !!option.text ? option.text : option;
            const value = !!option.value ? option.value : option;

            return (
              <Radio
                key={`${name} ${index}`}
                innerColor="#36B37E"
                onChange={this.onChange}
                text={text}
                name={name}
                value={value}
                checked={isChecked(value) || this.state.value === value}
              />
            );
          })}
        </RadioButtonContainer>
      </FormComponent>
    );
  }
}

export default RadioComponent;
