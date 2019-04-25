import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { Col as Column, Hidden } from "react-grid-system";
import {
  NumberIcon,
  Tab,
  Tabitem,
  PrimaryButton,
  xs,
  genericTestStyle,
  TabItem,
  WizardWrapper,
  Div,
  DefaultButton
} from "./components";

export const SubjectDetails = styled.div`
  ${genericTestStyle} padding: 0px;
  width: 100%;
  margin-top: 28px;
  border: 0;
  box-shadow: 0 1px 4px 0 rgba(99, 114, 130, 0.15);
  & .tab-body {
    padding: 36px 55px 44px;
    @media (max-width: ${xs}px) {
      padding: 36px 0 44px;
    }
  }
  & .notice {
    margin-left: 10px;
  }
  & .add-subject {
    clear: left;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

    & ${PrimaryButton} {
      margin-right: 0;
      width: inherit;
      border-color: transparent;
      border-radius: 4px;
    }
  }
`;

const tabStyle = css`
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
  padding-left: 55px;
  & ${TabItem}.tab {
    color: #767676;
    padding: 20px 25px 10px;
    // flex-grow: 1;
    font-size: 16px;
    text-align: left;
    &:first-child {
      padding-left: 0;
    }
  }
`;
const SingleTab = ({ isActive, icon, text, prev }) => (
  <TabItem className="tab" active={isActive}>
    {isActive ? (
      <NumberIcon icon="map-marker" active />
    ) : prev ? (
      <NumberIcon icon="check" active />
    ) : (
      <NumberIcon no={icon} />
    )}
    {text}
  </TabItem>
);
class SubjectDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: true,
      dialogWidth: 0,
      dialogPosition: 0,
      display_error: false,
      tabIndex: 0
    };
    this.rightColumn = null;
    this.leftColumn = null;
  }
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.rightColumn);
    const leftNode = ReactDOM.findDOMNode(this.leftColumn);
    this.setState(state => ({
      ...state,
      dialogWidth: node.offsetWidth + 15,
      dialogPosition: leftNode.offsetWidth - 75
    }));
  }
  activeIndex = t => {
    this.setState({
      tabIndex: t
    });
  };
  nextPage = () => {};
  previousPage = () => {};
  handleFormSubmit = () => {};
  render() {
    const child = {
      width: this.state.dialogWidth,
      position: this.state.dialogPosition
    };
    const { subject, questions } = this.props;
    let textArr = [
      "Overview",
      "Set Subject Pricing",
      "Gallery/Portfolio",
      "Requirements"
    ];
    if (!!questions.portfolio === false) {
      textArr = textArr.filter(x => x !== "Gallery/Portfolio");
    }
    const {
      disableNextScreen = true,
      nextPage,
      previousPage,
      step,
      sideStyle = ""
    } = this.props;
    return (
      <WizardWrapper
        navigationItemStyle={{ backgroundColor: "#FAFAFA" }}
        title="Select Subjects"
        goToNextScreen={nextPage}
        hideFooter={true}
        showPreviousScreen={true}
        goToPreviousScreen={previousPage}
        nextButtonText="I'm Done! Let's Proceed"
        contentStyle="margin-top: 45px;"
        containerStyle={{ position: "relative" }}
        noStyle={true}
        showNextScreen={disableNextScreen}
      >
        <Column ref={node => (this.leftColumn = node)} lg={9} md={12} xs={12}>
          <Column>
            <Div>
              <h2>Add details for {subject.name}</h2>
            </Div>
          </Column>
          <form>
            <SubjectDetails>
              <Tab extraStyle={tabStyle}>
                {textArr.map((tab, index) => (
                  <SingleTab
                    key={index}
                    isActive={step === index + 1}
                    prev={step > index + 1}
                    icon={index + 1}
                    text={tab}
                  />
                ))}
              </Tab>

              <div className="tab-body">
                {this.props.children(child)}
                <Hidden xs sm>
                  <Column>
                    <div className="add-subject">
                      <DefaultButton onClick={previousPage}>
                        <span>Cancel</span>
                      </DefaultButton>
                      <PrimaryButton
                        disabled={disableNextScreen}
                        onClick={nextPage}
                      >
                        <span>Save &amp; Continue</span>
                      </PrimaryButton>
                    </div>
                  </Column>
                </Hidden>
              </div>
            </SubjectDetails>
          </form>
        </Column>
        <ProfileExamples
          stylings={css`
            ${sideStyle};
          `}
          innerRef={node => {
            this.rightColumn = node;
          }}
          md={3}
          xs={12}
        >
          {this.props.toolTip}
        </ProfileExamples>
      </WizardWrapper>
    );
  }
}

export default SubjectDetailPage;

const ProfileExamples = styled(Column)`
  display: block;
  @media (max-width: ${xs}px) {
    display: none;
  }
  ${props => props.stylings};
`;
