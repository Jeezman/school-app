import React from "react";
import styled from "styled-components";
import { Hidden, Col as Column } from "react-grid-system";
import {
  PrimaryButton,
  DefaultButton,
  Icon,
  WordCounterComponent as WordCountFormElement,
  TextArea
} from "./components";
import Wrapper from "./Wrapper";
// import { connect } from "react-redux";
// import { mapStateToProps, UPDATE_FIELD } from "./reducers";
const InfoHeader = styled.div`
  padding: 8px 0 47px;
  & h3 {
    font-size: 22px;
    line-height: 28px;
    margin: 0;
    padding-bottom: 4px;
  }
  & p {
    color: #484848;
    font-size: 17px;
    line-height: 22px;
  }
`;
const Column2 = styled(Column)`
  float: none;
  display: inline-block;
  vertical-align: top;
`;
class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requirements: "",
      display_error: false,
      error_message: []
    };
  }
  updateField = (field, text) => {
    const name = field;
    this.setState({ [name]: text });
  };
  validateForm = e => {
    e.preventDefault();
    this.validateFields();
    if (!this.state.display_error) {
      // this.props.navigateTo("pricing");
    }
  };
  validateFields = () => {
    const errors = [];
    const { requirements } = this.state;
    if (requirements.length === 0) {
      errors[0] = "Please provide subject requirements!";
      this.setState({
        display_error: true
      });
    } else {
      this.setState({
        display_error: false
      });
    }
    this.setState({
      error_message: errors
    });
  };
  renderErrors = n => {
    // debugger;
    const { error_message } = this.state;
    const errors = error_message.slice();
    return errors[n];
  };
  render() {
    // const { errorMessageForField } = this.props;
    return (
      <Wrapper step={4} {...this.props}>
        {({ width, position }) => {
          return (
            <div>
              <InfoHeader>
                <Column2
                  md={1}
                  style={{
                    paddingLeft: 0,
                    float: "none",
                    display: "inline-block",
                    verticalAlign: "top"
                  }}
                >
                  <Hidden xs sm>
                    <Icon name="list" />
                  </Hidden>
                </Column2>
                <Column2
                  md={11}
                  style={{
                    paddingRight: 0,
                    float: "none",
                    display: "inline-block",
                    verticalAlign: "top"
                  }}
                >
                  <h3>Tell your clients what they need to get started</h3>
                  <p>
                    Structure your client instructions so they know the tools
                    they need to get before the teaching process begins.
                  </p>
                </Column2>
              </InfoHeader>
              <WordCountFormElement
                updateText={text => {}}
                value=""
                maxValue={80}
                style={{ padding: 0, clear: "both" }}
                label="List of items needed to effectively learn [Adobe Illustrator]"
                labelStyle={{ fontWeight: 500 }}
                error_message={this.renderErrors(0)}
                error={this.state.display_error}
              >
                {cProps => (
                  <TextArea
                    name=""
                    rows={5}
                    placeholder=" • Enter the requirements here"
                    {...cProps}
                  />
                )}
              </WordCountFormElement>
            </div>
          );
        }}
      </Wrapper>
    );
  }
}
export default PortfolioPage;
