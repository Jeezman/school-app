import React from "react";

import styled from "styled-components";
import { PrimaryButton } from "../../../components/simple/Button";
import Icon from "../../../components/simple/Icon";
import SpecialDiv from "../components/SpecialDiv";
import { TestContentStyle } from "../../../components/layout/ContentStyle";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import WizardWrapper from "../../../views/components/WizardPage";
import { mapStateToProps } from "./reducers";
import globals from "../../../siteStyle";
const { xs } = globals;

export const InstructionWrap = styled.div`
  display: flex;
  margin-bottom: 38px;
  margin-left: 10px;
  justify-content: space-between;

  @media (max-width: ${xs}px) {
    justify-content: center;
    padding-left: 14px;
    padding-right: 24px;
    margin-left: 0;
    & > div {
      // flex-grow: 1;
      margin-right: 35px;
    }
    & .details {
      // margin-left: -10px !important;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  & .details {
    margin-left: 20px;
    width: 80%;

    @media (max-width: ${xs}px) {
      width: 60%;
      margin: 0;
    }

    & h4 {
      color: #47525d;
      font-size: 16px;
      margin: 0;

      @media (max-width: ${xs}px) {
        font-size: 14px;
        color: #484848;
      }
    }

    & p {
      color: #7b8994;
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 0;

      @media (max-width: ${xs}px) {
        font-size: 14px;
        color: #848484;
      }
    }
  }
`;

const ExtendedDiv = styled(SpecialDiv)`
  & h2 {
    margin-bottom: 14px;
    font-weight: bold;
  }
  @media (max-width: ${xs}px) {
    margin-top: 35px;
    margin-bottom: 30px;
    padding-bottom: 10px;
  }

  p {
    @media (max-width: ${xs}px) {
      width: 60%;
    }
  }
`;
const ExtendedTestContentStyle = styled(TestContentStyle)`
  & > h2 {
    margin-bottom: 36px;
  }
  @media (max-width: ${xs}px) {
    padding: 20px;
    & > h2 {
      margin-bottom: 0;
      font-size: 15px;
      font-weight: bold;
    }
    & .test-wrap {
      background: white;
      width: 100%;
      padding-top: 25px;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 18px;
      border: 1px solid #f0f0f0;
      border-bottom: none;
    }
  }
  & .test-bottom {
    @media (max-width: ${xs}px) {
      background: white;
      border: 1px solid #f0f0f0;
      border-top: none;
    }
    & .icon-wrap {
      font-size: 17px;
      color: #7b8994;
      font-weight: 500;
      cursor: pointer;
    }
    & ${PrimaryButton} {
      padding: 16px 57px;
      width: auto;
      @media (max-width: ${xs}px) {
        padding: 16px 18px;
        display: block;
        width: 90%;
      }

      & span:last-child {
        display: none;

        @media (max-width: ${xs}px) {
          display: initial;
          float: right;
        }
      }
    }
  }
`;
class StartTestPage extends React.Component {
  previousPage = () => {
    this.props.navigateTo(0, "start-test", "subject-list");
  };
  nextPage = () => {
    const { currentSubject } = this.props;
    this.props.navigateTo(0, "start-test", currentSubject.slug, "quiz");
  };
  render() {
    const { currentSubject, endTime, duration } = this.props;
    const instructions = [
      {
        icon: "watch",
        heading: "Time Limit",
        detail: `${duration} Minutes | Automatic submission`
      },
      {
        icon: "calendar",
        heading: "Due Date",
        detail: endTime
      },
      {
        icon: "refresh",
        heading: "Test Retake",
        detail:
          "In the event you fail the test, you can come back to retake it in 30 Days "
      }
    ];
    return (
      <WizardWrapper
        navigationItemStyle={{ backgroundColor: "#FAFAFA" }}
        title="Take Subject Test"
        goToNextScreen={this.nextPage}
        hideFooter={true}
        showPreviousScreen={true}
        goToPreviousScreen={this.previousPage}
      >
        <ExtendedDiv>
          <h2 className="start-test__header">Take Test</h2>
          <p>
            Prove your knowledge of {currentSubject.name} and impress potential
            clients by taking our test!
          </p>
          <p>
            The more relevant tests you pass, the more professional you look
          </p>
        </ExtendedDiv>
        <ExtendedTestContentStyle>
          <h2>Test Instructions</h2>
          <div className="test-wrap">
            <div>
              {instructions.map(value => (
                <InstructionWrap key={value.icon}>
                  <div>
                    <Icon name={value.icon} width={40} height={40} />
                  </div>
                  <div className="details">
                    <h4>{value.heading}</h4>
                    <p>{value.detail}</p>
                  </div>
                </InstructionWrap>
              ))}
            </div>

            <hr />
            <div className="test-wrap__right">
              <h4>Good to go?</h4>
              <p>
                <span>
                  Click begin to start the [{currentSubject.name}] Test.
                </span>
                <span>Hope you perform well, good luck!</span>
              </p>
              <br />
              <p>
                <b>or</b> click cancel to go back
              </p>
            </div>
          </div>
          <div className="test-bottom">
            <a className="icon-wrap" onClick={this.previousPage}>
              <Icon name="angle-left" /> Back to all tests
            </a>
            <PrimaryButton onClick={this.nextPage}>
              <span>Begin Test</span>
              <span>
                <Icon name="arrow-right" />
              </span>
            </PrimaryButton>
          </div>
        </ExtendedTestContentStyle>
      </WizardWrapper>
    );
  }
}

export default connect(mapStateToProps)(withRouter(StartTestPage));
