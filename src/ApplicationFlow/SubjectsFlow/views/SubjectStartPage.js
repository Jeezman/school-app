import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../components/simple/Button";
import Content from "../../components/layout/Content";

import Icon from "../../components/simple/Icon";
import { BASE_PATH } from "../../fonts/index";
import WizardWrapper from "../../views/components/WizardPage";
import ContentStyle from "../../components/layout/ContentStyle";
import Divider from "./components/Divider";
import HeaderContent from "./components/Header";
import Media from "react-media";
const xs = 1024;
const BaseContent = styled(Content)`
  @media (max-width: ${xs}px) {
    margin-top: 0;
  }
`;

const StepContainerMobile = styled.div`
  @media (max-width: ${xs}px) {
    padding-left: 24px;
    margin-bottom: 34px;
    & h2 {
      margin-top: 3px !important;
      font-size: 14px !important;
      line-height: 18px;
    }
  }
`;
const Step = styled.div`
  width: 33%;
  text-align: center;

  @media (max-width: ${xs}px) {
    width: 100%;
    display: flex;
    text-align: left;
    &:last-child {
      & ${StepContainerMobile} {
        margin-bottom: 0 !important;
      }
    }}
  }
  & h2 {
    margin-top: 25px;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  & p {
    color: #767676;
    font-size: 15px;
    width: 96%;
    @media(max-width: 768px){
      font-size: 14px;
    }
  }
`;
const Steps = styled.div`
  display: flex;
  margin-bottom: 51px;
  margin-top: 38px;
  align-items: center;

  @media (max-width: ${xs}px) {
    margin-bottom: 0;
    flex-direction: column;
    margin-top: 30px;
  }
`;

const stepsData = [
  {
    icon: <Icon name="select" />,
    heading: "1. Choose Subjects",
    caption: "Select the subjects you're capable of teaching at the moment"
  },
  {
    icon: <Icon name="time" />,
    heading: "2. Take Test",
    caption: "Take a short online competency test for the selected subject."
  },
  {
    icon: <Icon name="align-left" />,
    heading: "3. Add Fees & Details",
    caption: "Once passed, you can add more details and charge a custom price."
  }
];

class SubjectStartPage extends React.Component {
  nextPage = () => {
    this.props.navigateTo(0, "introduction", "select-subjects");
  };
  render() {
    return (
      <WizardWrapper
        buttonStyle={{ backgroundColor: "#36B37E" }}
        navigationItemStyle={{ backgroundColor: "#FAFAFA" }}
        hideFooter={true}
        nextButtonText="Cool! Let's Begin"
        title="Back To Set Price"
        goToNextScreen={this.nextPage}
        ContentStyle={BaseContent}
        showNextScreen={false}
        showPreviousScreen={true}
      >
        <ContentStyle>
          <HeaderContent
            heading="Welldone, Godwin!"
            caption="Let’s now add the subjects you want to teach"
            icon="clap@2x"
          />
          <Divider>
            <p>Here is how it works</p>
          </Divider>
          <Steps>
            {stepsData.map(value => (
              <Step>
                {value.icon}
                <StepContainerMobile>
                  <h2>{value.heading}</h2>
                  <p>{value.caption}</p>
                </StepContainerMobile>
              </Step>
            ))}
          </Steps>
          <Media query={`(max-width: ${xs}px)`}>
            {matches =>
              matches ? null : (
                <PrimaryButton onClick={this.nextPage}>
                  Cool! Let's Begin
                </PrimaryButton>
              )
            }
          </Media>
        </ContentStyle>
      </WizardWrapper>
    );
  }
}

export default SubjectStartPage;
