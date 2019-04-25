import React from "react";
import styled from "styled-components";
import { Col as Column } from "react-grid-system";

import {
  DefaultButton,
  Icon,
  OptionStyle,
  PrimaryButton,
  SuccessBadge,
  TestContentStyle
} from "./components/index";

import { connect } from "react-redux";
import { mapStateToProps } from "../reducer";
import { xs } from "../../siteStyle";
export const SubjectListStyle = TestContentStyle.extend`
  padding: 50px 72px 43px;
  margin-bottom: 40px;
  margin-top: 13px;

  @media (max-width: ${xs}px) {
    border: 0;
    padding: 19px 5px 0;
  }
  & .choice-section {
    display: flex;
    width: 100%;

    @media (max-width: ${xs}px) {
      flex-direction: column;
      position: relative;
    }

    & .left {
      width: 7%;
      font-size: 17px;
      font-weight: 500;
      color: #36b37e;

      @media (max-width: ${xs}px) {
        display: none;
      }
    }

    & .right {
      width: 93%;

      @media (max-width: ${xs}px) {
        width: 100%;
        border-top: 2px dashed #f0f0f0;
        // margin-top: 70px;
        padding-top: 0;
        padding-bottom: 24px;
        // padding: 24px 0;
      }
    }

    & .right.type_one {
      border-top: 0;
      margin-top: 0;
      padding-top: 0;
    }

    & .right.type2 {
      width: 55%;
      @media (max-width: ${xs}px) {
        width: 100%;
        order: 2;
        margin-top: 3px;
        border-top: 0;
        padding-top: 24px;
      }
    }

    & .has-image {
      width: 40%;
      margin-left: 27px;

      @media (max-width: ${xs}px) {
        width: 100%;
        margin-left: 0;
        order: 1;
        // margin-top: 37px;
      }

      & img {
        width: 100%;
      }
    }
  }

  & .add-subject {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: flex-start;
    color: #0064e6;
    margin-top: 62px;
    margin-bottom: 8px;
    width: 100%;
    align-items: center;
    position: relative;

    @media (max-width: ${xs}px) {
      width: 100%;
      margin: 0;
      flex-direction: column;
    }

    &:hover {
      cursor: pointer;
    }
    @media (max-width: ${xs}px) {
      width: 100%;
    }

    & a {
      color: inherit;
      text-decoration: none;
    }
  }

  & ${PrimaryButton} {
    min-width: 90px !important;
    width: 25%;
    background: #0064e6;
    border: #0064e6;
    line-height: 20px;
    font-size: 19px;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 0;
    & span {
      flex: 1;
    }

    &:hover {
      background-color: #007af6;
    }

    @media (max-width: ${xs}px) {
      width: 100%;
      order: 1;
      margin-bottom: 11px;
    }
  }

  & ${DefaultButton} {
    font-size: 19px;
    line-height: 20px;
    width: 25%;
    border: 0;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & span {
      flex: 1;
      color: #7b8994;
    }

    @media (max-width: ${xs}px) {
      width: 100%;
      order: 2;
      position: absolute;
      top: 50px;
    }
  }

  & .add-subject.type2 {
    margin-left: 59px;
    width: 52.5%;

    @media (max-width: ${xs}px) {
      width: 100%;
      margin: 0;
      flex-direction: column;
    }

    & ${DefaultButton}, ${PrimaryButton} {
      width: 45%;

      @media (max-width: ${xs}px) {
        width: 100%;
      }
    }
  }
`;

const TestQuestion = styled.div`
  & > div {
    color: #484848;
    line-height: 32px;
    font-size: 18px;
    text-align: justify;
    margin-bottom: 17px;
  }

  span {
    @media (max-width: ${xs}px) {
      font-size: 14px;
    }
  }

  & hr {
    border: 2px dashed #f0f0f0;
    margin: 30px 0 45px 0;
    height: 0;
  }

  ${SuccessBadge} {
    padding: 5px;
    color: #fff;
    font-size: 14px;
    line-height: 18px;

    @media (max-width: ${xs}px) {
      font-size: 11px;
      padding: 2px 8px;
      letter-spacing: 1px;
    }
  }
`;

const QuestionPassage = ({ badge, passage }) => (
  <TestQuestion>
    <div>
      {badge}
      <span>{passage}</span>
    </div>
    <hr />
  </TestQuestion>
);

class QuestionPage extends React.Component {
  state = {
    option: "",
    currentAnswer: ""
  };
  onSubmit = () => {
    this.props.selectAnswer(this.state.option);
    if (this.props.no === this.props.lastQuestion) {
      this.props.handleSubmit();
    } else {
      this.props.nextQuestion();
    }
  };
  componentDidMount() {
    this.setState({
      option: this.props.currentAnswer
    });
    console.log(this.state.option);
  }
  render() {
    const q = this.props.question;
    const isSubmit =
      this.props.no === this.props.lastQuestion ? (
        <PrimaryButton onClick={this.onSubmit}>
          <span>Submit Quiz</span>
          <Icon name="angle-right" />
        </PrimaryButton>
      ) : (
        <PrimaryButton onClick={this.onSubmit}>
          <span>Next Question</span>
          <Icon name="angle-right" />
        </PrimaryButton>
      );
    return (
      <Column>
        {this.props.timerComponent}
        <SubjectListStyle>
          {q.comprehension && (
            <QuestionPassage
              badge={<SuccessBadge inverse>PASSAGE</SuccessBadge>}
              passage={q.comprehension.passage}
            />
          )}

          <OptionStyle
            no={this.props.no}
            type_one={q.display_format === "A"}
            onAnswerClick={option => this.setState({ option })}
            isSelected={val => val === this.state.option}
            answers={q.answers}
            question={q.content}
            image={q.figure}
          />

          <div className="add-subject">
            {this.props.no === 1 ? null : (
              <DefaultButton onClick={this.props.previousQuestion}>
                <Icon name="angle-left" />
                <span>Previous</span>
              </DefaultButton>
            )}

            {isSubmit}
          </div>
        </SubjectListStyle>
      </Column>
    );
  }
}

export default QuestionPage;
