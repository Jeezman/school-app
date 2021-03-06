import React from "react";
import styled from "styled-components";
import { xs } from "../siteStyle";
import Icon from "../components/simple/Icon";
import timerHelper from "./utils/helper";
import { mapStateToProps } from "./reducer";
import { connect } from "react-redux";
const TestInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  margin-top: 60px;

  & .clock {
    display: none;

    @media (max-width: ${xs}px) {
      display: block;
      color: #36b37e;
      margin-right: 7px;
    }
  }

  @media (max-width: ${xs}px) {
    margin-top: 17px;
    justify-content: center;
  }

  & span:first-child {
    color: #484848;
    font-size: 19px;
    line-height: 40px;

    @media (max-width: ${xs}px) {
      display: none;
    }
  }

  & span:last-child {
    font-size: 17px;
    color: #47525d;
    // font-weight: 600;
    // font-family: monospace;

    @media (max-width: ${xs}px) {
      color: #767676;
    }
  }
`;
class Timer extends React.Component {
  state = {
    duration: 0
  };
  updateTimer = () => {
    if (this.state.duration === 0) {
      this.props.quizCompleted();
    }
    this.setState(state => {
      const duration = state.duration - 1000;
      return {
        ...state,
        duration
      };
    });
  };
  getCurrentDuration() {
    return this.state.duration;
  }
  componentDidMount() {
    this.setState({ duration: this.props.newDuration });
    this.forceUpdateInterval = setInterval(this.updateTimer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }
  render() {
    const { type = "Multiple Choice" } = this.props;
    return (
      <TestInfoWrap>
        <TestInfo>
          <span>
            <b>{this.props.text}</b> - {type}
          </span>
          <span className="clock">
            <Icon name="clock-o" />
          </span>
          <span>
            Time remaining:{" "}
            {timerHelper.renderCountdownTimer(this.state.duration)}
          </span>
        </TestInfo>
        <div className="question-number">
          <b>{this.props.text}</b>
        </div>
      </TestInfoWrap>
    );
  }
}

const TestInfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  .question-number {
    display: none;
    @media (max-width: ${xs}px) {
      display: initial;
      margin-top: 23px;
      margin-left: 3px;
      margin-bottom: -23px;
      border-bottom: 5px solid #fbf9fb;
      z-index: 1;
    }
  }
`;

export default connect(mapStateToProps)(Timer);
//Question 1 of 30
