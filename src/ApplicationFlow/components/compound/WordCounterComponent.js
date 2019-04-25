import React from "react";
import styled from "styled-components";
import FormComponent from "../simple/FormComponent";
import globals from "../../siteStyle";
const { xs } = globals;
const WordCount = styled.div`
  display: inline-block;
  color: #848484;
  font-size: 12px;
  font-style: italic;
  line-height: 15px;
  float: ${props => (props.left ? "left" : "right")};
  text-align: ${props => (props.left ? "left" : "right")};
  margin-top: 8px;
  @media (max-width: ${xs}px) {
    margin-top: 3px;
  }
`;
class WordCountFormElement extends React.Component {
  state = {
    text: "",
    displayTooltip: false
  };

  componentDidMount() {
    const { value } = this.props;
    if (value) {
      this.setState(state => ({ ...state, text: value }));
    }
  }
  isMax = text => {
    return text.length <= this.props.maxValue;
  };
  onChange = e => {
    const text = e.target.value;
    if (!!this.props.maxValue) {
      if (text.length <= this.props.maxValue) {
        this.setState(state => {
          return { ...state, text };
        });
      }
    } else {
      this.setState(state => {
        return { ...state, text };
      });
    }
  };
  onFocus = e => {
    this.setState(state => ({ ...state, displayTooltip: true }));
  };
  onBlur = e => {
    const { updateText, onChange } = this.props;
    const updateText2 = !!updateText ? updateText : onChange;
    updateText2(this.state.text);
    this.setState(state => ({ ...state, displayTooltip: false }));
  };
  render() {
    const {
      updateText,
      value,
      maxValue,
      minValue,
      tooltip,
      ...rest
    } = this.props;
    return (
      <FormComponent errorMarginTop={25} {...rest}>
        {this.props.children({
          value: this.state.text,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          isMax: this.isMax
        })}
        {this.state.displayTooltip && tooltip}
        {minValue && <WordCount left>min. {minValue}</WordCount>}
        {maxValue && (
          <WordCount>
            {this.state.text.length} / {maxValue} max
          </WordCount>
        )}
      </FormComponent>
    );
  }
}

export default WordCountFormElement;
