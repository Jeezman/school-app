import React from "react";
import Media from "react-media";
import { Col as Column } from "react-grid-system";
import styled, { css } from "styled-components";
import {
  Input,
  PrimaryButton,
  DefaultButton,
  Select,
  Option,
  NoticeAction,
  WordCounterComponent as WordCountFormElement,
  FormComponent,
  ApplicationTooltip,
  StyledNotification,
  Div,
  xs
} from "./components";
import Wrapper from "./Wrapper";
import { range } from "../utils";
import {
  pricingPageReducer as mapStateToProps,
  PRICING_UPDATE_FIELD
} from "../reducers";
import { connect } from "react-redux";

const PageNoticeAction = styled(NoticeAction)`
  & p.note {
    line-height: 24px;
    color: #484848;
    font-size: 17px;
    padding-left: 7px;
    padding-right: 38.5px;
  }
`;
const Notification = props => (
  <Media query={`(max-width: ${xs}px)`}>
    {matches =>
      matches ? null : (
        <StyledNotification
          css={css`
            margin-top: 30px;
            padding-left: 15px;
            padding-right: 15px;
          `}
          {...props}
        />
      )
    }
  </Media>
);
const MyFormComponent = styled(FormComponent)`
  padding-top: 4px;
  &:not(:only-child):first-child {
    padding-bottom: 22px;
    border-bottom: 1px solid #f0f0f0;
  }
`;
const InputAddon = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  & .InputAddon {
    background-color: #fafafa;
    &:first-child {
      color: #47525d;
      font-family: Arimo;
      font-size: 19px;
      padding: 13.5px;
      border: 1px solid #dce0e0;
      border-radius: 2px 0 0 2px;
    }
    &:last-child {
      color: #484848;
      font-size: 17px;
      padding: 13.5px 23px;
      border: 1px solid #dce0e0;
      border-radius: 0 2px 2px 0;
      text-align: center;
    }
  }
  & ${Input} {
    border: none;
    border-width: 1px 0;
    border-style: solid;
    border-color: #dce0e0;
    border-radius: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 19px;
    font-weight: 500;
    line-height: 24px;
    width: 20%;
  }
`;
const AddonInput = ({
  currency = "₦",
  afterText = "per hour per student",
  ...rest
}) => (
  <InputAddon>
    <span className="InputAddon">{currency}</span>
    <Input {...rest} />
    {!!afterText ? <span className="InputAddon">{afterText}</span> : null}
  </InputAddon>
);
const InfoHeader = styled(Div)`
  clear: left;
  padding: 28px 0;
  margin-bottom: 0;
  & h2 {
    font-size: 22px;
    text-transform: none;
    line-height: 28px;
    text-align: left;
    background-color: transparent;
    border: transparent;
  }
  & p {
    color: #484848;
    font-size: 17px;
    line-height: 18px;
  }
`;
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & div {
    width: 47%;
    & span {
      border-radius: 4px;
    }
  }
  & p {
    color: #36b37e;
    line-height: 22px;
    font-size: 17px;
    padding-left: 14px;
    & a {
      color: #484848;
    }
  }
`;

// export const SideNote = ({ heading, children, showArrow }) => (
//   <Hidden xs sm>
//     <Column md={3} lg={3} style={{ marginTop: "185px" }}>
//       <ApplicationTooltip heading={heading}>{children}</ApplicationTooltip>
//     </Column>
//   </Hidden>
// );

class PricingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        price: "",
        discount: "",
        adminPercent: 30
      },
      display_error: false,
      errors: {
        price: true,
        discount: false
      }
    };
  }
  updateField = (field, text) => {
    const name = field;
    this.setState(state => {
      let fields = { ...state.fields, [name]: text };
      let evaluation = !!text === false;
      if (name === "discount") {
        evaluation = false;
      }
      let errors = { ...state.errors, [field]: evaluation };

      return { ...state, fields, errors };
    });
  };
  earnAmount = () => {
    return Math.round(parseFloat(this.state.fields.price) * 0.7);
  };
  displayError = field => {
    if (field === "price") {
      let result =
        parseFloat(this.state.fields.price) <= 0 && this.state.display_error;
      return (
        parseFloat(this.state.fields.price) <= 0 && this.state.display_error
      );
    }
    return this.state.display_error && this.state.errors[field];
  };

  validateForm = () => {
    if (this.canSubmit() && this.state.fields.price > 0) {
      this.props.dispatch({
        type: PRICING_UPDATE_FIELD,
        value: this.state.fields
      });
      this.nextPage();
    } else {
      this.setState({ display_error: true });
    }
  };
  nextPage() {
    const { subject: { slug } } = this.props;
    this.props.navigateTo(slug, "portfolio");
  }
  previousPage = () => {
    const { subject: { slug } } = this.props;
    this.props.navigateTo(slug, "overview");
  };
  canSubmit = () => {
    const localErrors = [...new Set(Object.values(this.state.errors))];
    return localErrors.length === 1 && localErrors[0] === false;
  };
  render() {
    const state = this.state.fields;
    return (
      <Wrapper
        step={2}
        toolTip={
          <ApplicationTooltip
            icon="naira"
            heading="Price Tip"
            stylings={`
            margin-top: 185px;
            position: absolute;
            right: -40px;
            margin-left: 15px;`}
          >
            <p>Tutors who teach Adobe Illustrator typically charge:</p>
            <h4 style={{ color: "#36b37e" }}>N3,600/hr</h4>
            <p>
              <span className="asterick">*</span>Be sure to set a fair
              competitive price so clients can pick you.
            </p>
          </ApplicationTooltip>
        }
        nextPage={this.validateForm}
        previousPage={this.previousPage}
        disableNextScreen={!this.canSubmit()}
        {...this.props}
      >
        {({ width, position }) => {
          return (
            <div>
              <MyFormComponent
                label="How much do you want to charge per hour?"
                labelStyle={
                  { fontWeight: 500 } // maxValue={80}
                }
                error_message="Please state your charge per hour"
                error={this.displayError("price")}
              >
                <AddonInput
                  afterText="per hour per student"
                  onChange={e => this.updateField("price", e.target.value)}
                  type="number"
                  placeholder="3,000"
                />
                {state.price ? (
                  <Notification bgColor="rgba(54,179,126,0.1)">
                    <div>
                      <p className="note">
                        Means you will be paid N{this.earnAmount()} for every
                        hour you teach after we deduct our service fee of{" "}
                        {state.adminPercent}% (N{state.price -
                          this.earnAmount()})
                      </p>
                    </div>
                  </Notification>
                ) : null}
              </MyFormComponent>
              <Column>
                <InfoHeader>
                  <h2>Discount for more students?</h2>
                  <p>
                    To encourage longer stays, some tutors set a weekly or
                    monthly discount.
                  </p>
                </InfoHeader>
              </Column>
              <MyFormComponent label="How Much Discount?" error={false}>
                <SelectWrapper>
                  <Select
                    output={e => (!!e ? `${state.discount}% Discount` : null)}
                    onChange={text => this.updateField("discount", text)}
                    noColumn
                    uncontrolled={true}
                    defaultText="0% Discount"
                    value={state.discount}
                  >
                    {range(0, 30, 5).map((elem, index) => (
                      <Option value={elem} key={index}>
                        {`${elem}% Discount`}
                      </Option>
                    ))}
                  </Select>
                  <p>
                    <span style={{ color: "#36b37e" }}>Discount Tip: 20%</span>{" "}
                    ·{" "}
                    <a
                      onClick={() => {
                        this.updateField("discount", 20);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Use This Discount
                    </a>
                  </p>
                </SelectWrapper>
                {parseInt(state.discount) > 1 ? (
                  <Notification bgColor="rgba(54,179,126,0.1)">
                    <div>
                      <p className="note">
                        Means clients will pay additional N{parseFloat(
                          state.price
                        ) *
                          parseFloat(state.discount) /
                          100}/hr for each extra student
                      </p>
                    </div>
                  </Notification>
                ) : null}
              </MyFormComponent>
            </div>
          );
        }}
      </Wrapper>
    );
  }
}
export default connect(mapStateToProps)(PricingPage);
