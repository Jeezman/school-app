import React from "react";
import styled from "styled-components";
import { Col as Column } from "react-grid-system";
import { SuccessButton } from "../../components/simple/Button";
import Icon from "../../components/simple/Icon";
import { Heading } from "./Heading";
import { TestContentStyle } from "../../components/layout/ContentStyle";
import globals from "../../siteStyle";

import palm from "./img/palm@2x.png";

const { xs } = globals;
const TestResultContentStyle = TestContentStyle.extend`
  & .Heading-efonvz {
    @media (max-width: ${xs}px) {
      padding-top: 40px;
    }
  }
  & .body-text {
    color: #767676;
    font-weight: 300;
    font-size: 17px;
    text-align: center;
    line-height: 26px;
    width: 70%;
    margin: 0 auto 27px;

    @media (max-width: ${xs}px) {
      width: 100%;
    }
  }

  & .SuccessButton__container {
    margin: 0 auto;
    width: 100%;
    text-align: center;

    @media (max-width: ${xs}px) {
      order: 1;
      margin-top: 16px;
      margin-left: -15px;
      position: absolute;
      bottom: -56px;
    }
  }

  & ${SuccessButton} {
    width: 40%;
    line-height: 20px;
    font-size: 16px;
    text-transform: capitalize;
    border-radius: 4px;

    @media (max-width: ${xs}px) {
      width: 100%;
      padding-top: 18px;
      padding-bottom: 18px;
      border-radius: 0;
    }
  }

  & .VerifyIdentityPage-content__flex {
    display: flex;
    flex-direction: column;

    & .sub-header {
      font-size: 19px;
    }
  }
`;

class VerifyIdentityPage extends React.Component {
  nextPage = () => {
    this.props.navigateTo(0, "start", "id-verification");
  };

  render() {
    return (
      <Column>
        <TestResultContentStyle>
          <div className="VerifyIdentityPage-content__flex">
            <Heading mb="23px">
              <img alt="" src={palm} />
              <h1>High fives!</h1>
              <p className="sub-header">
                You are almost done with publishing your first subject
              </p>
            </Heading>
            <p className="body-text">
              Before you start teaching on Tuteria, the security of your account
              is important to us. Therefore, we require all tutors to verify
              their identity before we can publish their first Subject.
            </p>
            <div className="SuccessButton__container">
              <SuccessButton onClick={this.nextPage}>
                I understand! Verify Now
              </SuccessButton>
            </div>
            <Steps>
              {stepsData.map((val, index) => (
                <Step key={index.toString()}>
                  <div className="step__icon-container">{val.icon}</div>
                  <div className="step__content-container">
                    <h2>{val.heading}</h2>
                    <p>{val.caption}</p>
                  </div>
                </Step>
              ))}
            </Steps>
          </div>
        </TestResultContentStyle>
      </Column>
    );
  }
}

const stepsData = [
  {
    icon: <Icon name="handshake" />,
    heading: "Earn more trust",
    caption: "Clients can trust you better and feel safe working with you."
  },
  {
    icon: <Icon name="moneybag" />,
    heading: "Make more money",
    caption:
      "Only verified tutors get access to clients and make money on Tuteria"
  },
  {
    icon: <Icon name="shield" />,
    heading: "Verified Badge",
    caption:
      "You get more promotion by getting a verified badge to your profile"
  }
];

const Step = styled.div`
  position: relative;
  width: 28%;
  text-align: center;

  &:first-of-type {
    & .step__icon-container {
      padding-top: 19px;
    }
  }

  @media (max-width: ${xs}px) {
    width: 100%;
    display: flex;
    padding-bottom: 24px;
    &:last-of-type {
      & .step__content-container {
        padding-left: 28px;
      }

      & .step__icon-container {
        padding-left: 6px;
      }
    }

    &:first-of-type {
      & .step__icon-container {
        padding-top: 16px;
      }
    }
  }

  & .step__content-container {
    @media (max-width: ${xs}px) {
      padding-left: 24px;
    }

    & h2 {
      padding-top: 16px;
      font-size: 17px;
      font-weight: bold;
      padding-bottom: 8px;
      text-transform: capitalize;
      color: #1b2733;

      @media (max-width: ${xs}px) {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        padding-bottom: 8px;
        background: 0;
        border: none;
        text-align: left;
      }
    }
    & p {
      color: #848484;
      font-size: 15px;
      width: 70%;
      margin: 0 auto;

      @media (max-width: ${xs}px) {
        width: 100%;
        text-align: left;
      }
    }
  }

  & .step__icon-container {
    position: relative;
  }
`;
const Steps = styled.div`
  display: flex;
  margin-bottom: 8px;
  margin-top: 48px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${xs}px) {
    flex-direction: column;
    margin-top: 16px;
  }
`;

export default VerifyIdentityPage;
