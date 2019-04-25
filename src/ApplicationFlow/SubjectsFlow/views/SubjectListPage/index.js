import React from "react";
import styled from "styled-components";
// import { Row, Col as Column } from "react-grid-system";
import { SuccessBadge, DangerBadge } from "../../../components/simple/Badge";
import {
  PrimaryButton,
  SuccessButton
} from "../../../components/simple/Button";
import Icon from "../../../components/simple/Icon";
import SpecialDiv from "../components/SpecialDiv";
import { TestContentStyle } from "../../../components/layout/ContentStyle";
import globals from "../../../siteStyle";
import WizardWrapper from "../../../views/components/WizardPage";
import { connect } from "react-redux";
import { REMOVE_SUBJECT } from "../SubjectSelectPage/reducers";
import { mapStateToProps, SUBJECT_TO_TEST } from "./reducers";
import SearchBar from "../components/SearchBar";

const { xs } = globals;
// import {}
export const SubjectListStyle = styled(TestContentStyle)`
  margin-bottom: 0;
  margin-top: 0;
  padding: 43px 40px 43px;
  @media (max-width: ${xs}px) {
    border: 0;
    background: initial;
    margin-top: 0;
    padding-top: 20px;
    padding: 20px 19px 0;
  }

  & .add-subject {
    align-items: center;
    justify-content: space-between;
    align-self: flex-start;
    color: #0064e6;
    margin-top: 10px;
    width: 100%;
    font-size: 17px;
    &:hover {
      cursor: pointer;
    }
    & i {
      font-size: 21px;
      margin-right: 8.5px;
    }
    @media (max-width: ${xs}px) {
      width: 100%;
      align-self: center;
      margin-bottom: 58px;
      text-align: center;
    }
  }

  & ${PrimaryButton} {
    min-width: 90px !important;
    width: 110px;
    background: #0064e6;
    border: #0064e6;
    line-height: 20px;
    font-size: 16px;
    margin: 0;

    &:hover {
      background-color: #007af6;
    }
  }

  & ${SuccessButton} {
    font-size: 15px;
    line-height: 20px;
    width: 140px;
  }
`;

const ListBottom = styled.div`
  padding: 49px 0px 85px;
  width: 75%;
  margin: 0 auto;
  font-size: 17px;
  color: #7b8994;

  & span:hover {
    cursor: pointer;
  }
  & i {
    margin-right: 10px;
  }
  @media (max-width: ${xs}px) {
    display: none;
  }
`;

const Header = styled.div`
  // border: 2px solid limegreen;
  width: 100%;
  font-weight: bold;

  display: flex;
  justify-content: space-between;

  & > div {
    // border: 1px solid grey;
    width: 20%;
    padding: 17px 0;
  }

  & .header-subject {
    width: 25%;
  }

  & .header-taken {
    // padding-left: 25px;
    width: 15%;
  }

  & .header-score {
    width: 21%;
  }

  .header-status {
    width: 15%;
    padding-left: 17px;
  }

  & div:last-child {
    // border: 1px solid red;
    width: 17%;
  }

  @media (max-width: ${xs}px) {
    display: none;
  }
`;

const RowRap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  border-top: 1px solid #f0f0f0;
  padding-top: 24px;
  padding-bottom: 24px;
  & .hide-mobile-sec {
    @media (max-width: ${xs}px) {
      display: none;
    }
  }
  & .hide-mobile {
    display: none;
    @media (max-width: ${xs}px) {
      display: inline-block;
      text-transform: uppercase;
      color: #767676;
      font-size: 10px;
    }
  }
  & .body-taken,
  .body-status,
  .score {
    @media (max-width: ${xs}px) {
      display: flex;
      & .hide-mobile {
        width: 50%;
      }
    }
  }
  & ${SuccessBadge}, ${DangerBadge} {
    padding: 4px 6px;
    margin-right: 0;
    font-size: 12px;
  }
  & .status-passed {
    color: #36b37e;
  }

  & .status-fail {
    color: #e9411b;
  }

  @media (max-width: ${xs}px) {
    // border: 1px solid red;
    border: 1px solid #f0f0f0;
    background-color: #ffffff;
    flex-direction: column;
    width: 100%;
    margin-bottom: 18px;
    align-items: flex-end;
    position: relative;
    padding-top: 0;
    margin-bottom: 18px;
    & div:not(:first-child) {
      width: 100% !important;
      font-size: 13px;
      padding-left: 0;
      padding: 12px;
    }
  }

  & > div {
    // border: 1px solid gold;
    width: 20%;

    @media (max-width: ${xs}px) {
      // border: 1px solid red;
    }
  }

  & .body-subject {
    width: 25%;
    & > i {
      display: none;
    }
    @media (max-width: ${xs}px) {
      width: 100%;
      border: 1px solid #f0f0f0;
      background-color: #f0f0f0;
      padding-left: 15px;
      padding: 14.5px;
      & > i {
        display: inline-block;
      }
    }
  }

  & .body-taken {
    width: 15%;

    &:before {
      @media (max-width: ${xs}px) {
        display: block;
        width: 40%;
        // border: 1px solid green;
        position: absolute;
        left: 0;
        top: 57px;
        padding: 22px 0;
        padding-left: 15px;
        text-transform: uppercase;
        font-size: 10px;
        line-height: 13px;
        font-weight: 500;
        color: #767676;
      }
    }
  }

  & .subject-delete {
    cursor: pointer;
  }

  & .body-status.taken {
    &: before {
      top: 178px;
    }
  }

  & .body-status {
    width: 15%;
    padding-left: 17px;

    &:before {
      @media (max-width: ${xs}px) {
        display: block;
        width: 40%;
        // border: 1px solid green;
        position: absolute;
        left: 0;
        top: 170px;
        padding: 21px 0;
        padding-left: 15px;
        text-transform: uppercase;
        font-size: 10px;
        line-height: 13px;
        font-weight: 500;
        color: #767676;
      }
    }
  }

  & .body-score {
    width: 21%;
    &:before {
      @media (max-width: ${xs}px) {
        display: block;
        width: 40%;
        // border: 1px solid green;
        position: absolute;
        left: 0;
        top: 116px;
        padding: 24px 0;
        padding-left: 15px;
        text-transform: uppercase;
        font-size: 10px;
        line-height: 13px;
        font-weight: 500;
        color: #767676;
      }
    }

    & ${PrimaryButton} {
      @media (max-width: ${xs}px) {
        font-size: 15px;
        line-height: 0;
        // width: 50%;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
      }
    }
  }

  & > div:last-child {
    width: 17%;
    text-align: right;
    padding-right: 10px;

    @media (max-width: ${xs}px) {
      // border: 2px solid red !important;
      width: 100% !important;
      padding-left: 15px;
      padding-right: 15px;
    }

    & ${SuccessButton} {
      @media (max-width: ${xs}px) {
        font-size: 15px;
        line-height: 20px;
        width: 100%;
      }
    }
  }

  .score {
    display: flex;
    align-items: center;

    & span:nth-child(2) {
      & > span {
        margin-right: 10px;
      }
    }
  }

  & .taken-mobile {
    @media (max-width: ${xs}px) {
      // display: none;
      position: absolute;
      top: 2px;
    }
  }
`;

const ScoreSection = ({ taken, score, onClick }) => (
  <div className="score">
    <span className="hide-mobile">Score (100%)</span>
    {taken ? (
      <span>
        <span>{score.figure}</span>
        <span>
          {score.passed ? (
            <SuccessBadge inverse>{score.badge}</SuccessBadge>
          ) : (
            <DangerBadge inverse>{score.badge}</DangerBadge>
          )}
        </span>
      </span>
    ) : (
      <PrimaryButton onClick={onClick}>Take test</PrimaryButton>
    )}
  </div>
);
const RowItem = ({
  id,
  subject,
  taken,
  score,
  status,
  takeTest,
  removeSubject,
  navigateToSubject
}) => {
  const onClick = () => removeSubject(subject);
  const onTakeTest = () => takeTest(subject);
  return (
    <RowRap>
      <div className="body-subject">
        <span>{subject.name}</span>
        {taken ? null : (
          <Icon
            onClick={onClick}
            style={{ fontSize: 18, float: "right" }}
            name="trash-o"
          />
        )}
      </div>
      <div className="body-taken">
        <span className="hide-mobile">Test Taken</span>
        <span>{taken ? "Yes" : "Not yet"}</span>
      </div>
      <div className="body-score">
        <ScoreSection onClick={onTakeTest} taken={taken} score={score} />
      </div>
      <div className={taken ? "body-status" : "body-status taken"}>
        <span className="hide-mobile">Status</span>
        <span
          style={{
            color: taken
              ? score.passed ? "rgba( 54,179,126,1 )" : "rgba( 233,65,27,1 )"
              : ""
          }}
        >
          {taken ? (score.passed ? "Passed!" : "Failed!") : "Not Available"}
        </span>
      </div>
      <div
        className={
          taken ? (score.passed ? "" : "hide-mobile-sec") : "taken-mobile"
        }
      >
        {taken ? (
          score.passed ? (
            <SuccessButton
              onClick={() => {
                navigateToSubject(subject);
              }}
            >
              Add Details <Icon style={{ float: "right" }} name="arrow-right" />
            </SuccessButton>
          ) : null
        ) : (
          <Icon
            onClick={onClick}
            style={{ cursor: "pointer", fontSize: 18 }}
            name="trash-o"
          />
        )}
      </div>
    </RowRap>
  );
};
class SubjectListPage extends React.Component {
  state = {
    displaySearch: false
  };
  deleteSubject = subject => {
    this.props.dispatch({ type: REMOVE_SUBJECT, value: subject });
  };
  takeTest = subject => {
    this.props.dispatch({ type: SUBJECT_TO_TEST, value: subject });
    this.props.navigateTo(0, "subject-list", "start-test");
  };
  previousPage = () => {
    this.props.navigateTo(0, "subject-list", "select-subjects");
  };
  goToSubjectDetailPage = subject => {
    this.props.navigateTo(0, "subject-list", `${subject.slug}/add-details`);
  };
  render() {
    const data = this.props.selectedSubjects;
    return (
      <WizardWrapper
        navigationItemStyle={{ backgroundColor: "#FAFAFA" }}
        title="Select Subjects"
        goToNextScreen={this.nextPage}
        hideFooter={true}
        showPreviousScreen={true}
        goToPreviousScreen={this.previousPage}
      >
        {/* <Column xs={12}> */}
        <SpecialDiv inverse>
          <h2>Take at least one test to proceed</h2>
        </SpecialDiv>
        <SubjectListStyle>
          <Header>
            <div className="header-subject">Subject</div>
            <div className="header-taken">Test taken?</div>
            <div className="header-score"> Score (out of 100%)</div>
            <div className="header-status">Status</div>
            <div style={{ opacity: 0 }}>Empty</div>
          </Header>

          {data.map((val, index) => (
            <RowItem
              key={index}
              takeTest={this.takeTest}
              removeSubject={this.deleteSubject}
              navigateToSubject={this.goToSubjectDetailPage}
              {...val}
            />
          ))}
          {this.state.displaySearch ? (
            <SearchBar
              style={{ width: "100%" }}
              selectedSubjects={this.props.subjects}
              dispatch={this.props.dispatch}
              afterClick={() => {
                this.setState({ displaySearch: false });
              }}
            />
          ) : (
            <a
              onClick={() => this.setState({ displaySearch: true })}
              className="add-subject"
            >
              <Icon name="plus" />
              <span>Add another subject</span>
            </a>
          )}
        </SubjectListStyle>

        <ListBottom
          onClick={this.previousPage}
          style={{ padding: "49px 0 85px" }}
        >
          <Icon name="angle-left" /> <span>Back to select subjects</span>
        </ListBottom>
        {/* </Column> */}
      </WizardWrapper>
    );
  }
}
export default connect(mapStateToProps)(SubjectListPage);
