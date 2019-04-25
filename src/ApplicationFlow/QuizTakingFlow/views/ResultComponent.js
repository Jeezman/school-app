import React from "react";
import { Col as Column } from "react-grid-system";

import {
  DangerBadge,
  PrimaryButton,
  SuccessBadge,
  TestContentStyle
} from "./components/index";

import { xs } from "../../siteStyle";
import { BASE_PATH } from "../../fonts/index";
import styled from "styled-components";

const TestResultContentStyle = TestContentStyle.extend`
  margin: 40px auto !important;
  & .test-wrap {
    justify-content: center;
    @media (max-width: ${xs}px) {
      width: 100%;
    }
    & > div {
      width: 70%;

      @media (max-width: ${xs}px) {
        width: 100%;
      }
    }
  }

  & ${PrimaryButton} {
    width: 40%;
    background-color: #0064e6;
    border-color: #0064e6;

    &:hover {
      background-color: #007af6;
    }

    @media (max-width: ${xs}px) {
      width: 70%;
      background-color: #0064e6;
      border-color: #0064e6;
    }
  }
`;

const InstructionWrap = styled.div`
  display: flex;
  margin-bottom: 38px;
  margin-left: 10px;
  justify-content: space-between;

  @media (max-width: ${xs}px) {
    // justify-content: center;
    // padding-left: 14px;
    // padding-right: 24px;
    margin-left: 0;
    & > div {
      // flex-grow: 1;
      margin-right: 35px;
      width: 44%;
    }
    & .details {
      // margin-left: -10px !important;
      width: 56%;
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

const ResultWrap = InstructionWrap.extend`
  justify-content: space-between;

  & .details {
    width: 60%;
    & h4 {
      display: flex;
      align-items: center;
    }

    & p {
      color: #767676;
      font-size: 13px;
      font-weight: 300;
    }

    & span {
      margin-left: 14px;
    }

    & i {
      color: #484848;
      font-size: 14px;
      line-height: 18px;
      font-weight: 300;
    }
  }
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: ${props => props.mb || "43px"};

  @media (max-width: ${xs}px) {
    width: 100%;
    margin-bottom: 30px;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${xs}px) {
      flex-direction: column-reverse;
    }
  }
  & h3 {
    display: inline-block;
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 0;
    color: #484848;
    @media (max-width: ${xs}px) {
      font-size: 28px;
      margin-bottom: 8px;
    }
  }
  & b {
    color: #0064e6;
  }
  & img {
    margin-left: 20.5px;
    width: 54px;
    @media (max-width: ${xs}px) {
      margin-left: 0;
      margin-bottom: 8px;
    }
  }
  & p {
    font-size: 24px;
    margin-top: 20px;

    @media (max-width: ${xs}px) {
      font-size: 18px;
    }
  }

  .sub-header {
    color: #484848;
    font-weight: 500;
  }
`;

const HeaderContent = ({ heading, caption, children, icon }) => (
  <div>
    <Heading>
      <div>
        {heading && <h3>{heading}</h3>}
        <img src={`${BASE_PATH}img/skills/${icon}.png`} alt="" />
      </div>
      <p>{caption || children}</p>
    </Heading>
  </div>
);

class ResultComponent extends React.Component {
  state = {
    percentage_score: 0,
    didPassTest: null,
    duration: 0
  };

  componentWillMount() {
    this.props.clearTimer();
  }
  componentDidMount() {
    this.determineResult();
  }

  determineResult = () => {
    this.setState(state => {
      return { ...state, ...this.props.getResult() };
    });
  };

  render() {
    const { durationInMins, details } = this.props;
    const resultInfo = [
      {
        category: "Test taken",
        heading: {
          detail: details.name
        },
        detail: <i>{details.description}</i>
      },
      {
        category: "Score (out of 100%)",
        heading: {
          detail: `${this.state.percentage_score}%`,
          badge: this.state.didPassTest ? (
            <SuccessBadge inverse>Top {details.percentile}%</SuccessBadge>
          ) : (
            <DangerBadge inverse>Below Average</DangerBadge>
          )
        },
        detail: ""
      },

      {
        category: "Rank",
        heading: { detail: details.position },
        detail: ""
      },
      {
        category: "Time to complete",
        heading: {
          detail: details.timeToCompile(this.state.duration)
        },
        detail: ""
      }
    ];
    const passedStatus = {
      icon: this.state.didPassTest ? "fist-icon@2x" : "sad-icon@2x",
      content1: this.state.didPassTest ? "Fantastic" : "Oops",
      content2: `You ${
        this.state.didPassTest ? "Passed" : "didn't pass"
      } the test`
    };

    return (
      <Column>
        <TestResultContentStyle>
          <HeaderContent icon={passedStatus.icon}>
            <p>
              <b>{passedStatus.content1}!</b> {passedStatus.content2}
            </p>
          </HeaderContent>

          <div className="test-wrap">
            <div>
              {resultInfo.map((value, index) => (
                <ResultWrap key={index}>
                  <div>{value.category}</div>
                  <div className="details">
                    <h4>
                      {value.heading.detail} <span>{value.heading.badge}</span>
                    </h4>
                    {value.detail && <p>{value.detail}</p>}
                  </div>
                </ResultWrap>
              ))}
            </div>
          </div>
          <PrimaryButton onClick={this.props.navigateTo}>
            Continue to next step
          </PrimaryButton>
        </TestResultContentStyle>
      </Column>
    );
  }
}

export default ResultComponent;
