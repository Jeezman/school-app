import React from "react";
import ReactDOM from "react-dom";
import { Col as Column } from "react-grid-system";
import { connect } from "react-redux";
import Media from "react-media";
import styled from "styled-components";
import { mapStateToProps, UPDATE_FIELD } from "./reducers";
import {
  ApplicationTooltip,
  Div,
  StyledNotification,
  TextArea,
  WizardWrapper,
  WordCountFormElement,
  RadioComponent,
  DropdownComponent,
  InputComponent,
  TextareaComponent
} from "../components/index";

const xs = 1024;
const ViewExample = styled.span`
  display: none;
  @media (max-width: ${xs}px) {
    display: inline-block;
    float: right;
    color: #0064e6;
  }
`;

class AboutTutorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: true,
      dialogWidth: 0,
      dialogPosition: 0,
      display_error: false
    };
    this.rightColumn = null;
    this.leftColumn = null;
  }
  changeOnlineExperience = value => {
    this.updateParentData("online_experience", value);
  };
  updateParentData = (field, value) => {
    // this.updateLocalState(field, value);
    this.props.dispatch({ type: UPDATE_FIELD, key: field, value });
  };
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.rightColumn);
    const leftNode = ReactDOM.findDOMNode(this.leftColumn);
    this.setState(state => ({
      ...state,
      dialogWidth: node.offsetWidth - 30,
      dialogPosition: leftNode.offsetWidth - 15
    }));
  }
  fieldHasError = (field, specific) => {
    return this.props.fieldHasError(this.state.display_error, field, specific);
  };
  formHasErrors = () => {
    const { errorMessages } = this.props;
    return Object.keys(errorMessages).length === 0;
  };
  validateForm = () => {
    if (this.formHasErrors()) {
      this.props.navigateTo(0, 20, "about-tutor", "upload-photo");
    } else {
      this.setState(state => ({ ...state, display_error: true }));
    }
  };
  previousPage = () => {
    this.props.navigateTo(1, "about-tutor", "upload-photo");
  };
  render() {
    const proDescription = `EXAMPLE: I am a very experienced IELTS and IGSCE tutor who uses highly systematic and result-oriented approach to help students score very high mark. I specialize in teaching the Speaking, Reading, Listening and writing  skills to those who aim at scores of at least 8.0
    
    My Ideal students are those who don't just want to pass the exam, but who are aiming for a high score, typically 8.0 and above. That way, we would be able to derive the best value from our time together. I normally assess each student for their individual needs.
    
    I believe in making my students feel comfortable and creating an environment good for learning by using interesting, challenging and engaging material.`;
    const isMobile = window.matchMedia(`(max-width: ${xs}px)`).matches;
    const onlineExperienceOptions = [
      { value: "Y", text: "Yes" },
      { value: "N", text: "No" },
      { value: "KO", text: isMobile ? "Kind of" : "Hmm, Kind of" }
    ];
    const descriptionLabel = isMobile
      ? "Professional Description"
      : "Write a brief description about yourself";

    const state = this.props.data;
    const toolTipStyle = {
      width: this.state.dialogWidth,
      height: "auto",
      position: "absolute",
      marginLeft: this.state.dialogPosition,
      top: 0
    };
    const { errorMessageForField } = this.props;
    const getProgress = () => {
      const progress = this.props.progressBar.reduce(
        (sum, value) => sum + value,
        0
      );
      return progress;
    };
    return (
      <WizardWrapper
        nextButtonText="Next: Set your profile"
        showNextScreen={false}
        goToNextScreen={this.validateForm}
        showPreviousScreen={true}
        goToPreviousScreen={this.previousPage}
        progress={getProgress()}
      >
        <Column ref={node => (this.leftColumn = node)} md={8} xs={12}>
          <Column>
            <Div>
              <h2>Tell us more about you</h2>
              <p>
                This is one of the first things clients will see on your
                profile, so take out time to make yourself stand out
              </p>
            </Div>
          </Column>
          <form>
            <DropdownComponent
              label="How long have you been teaching?"
              error_message={errorMessageForField("years_of_experience")}
              error={this.fieldHasError("years_of_experience")}
              value={state.years_of_experience}
              onChange={val =>
                this.updateParentData("years_of_experience", val)
              }
              options={[
                { value: "1 Year", text: "1 Year" },
                { value: "2 Years", text: "2 Years" }
              ]}
            />
            <RadioComponent
              label="Do you have experience teaching online?"
              error_message={errorMessageForField("online_experience")}
              error={this.fieldHasError("online_experience")}
              options={onlineExperienceOptions}
              name="online_experience"
              onChange={this.changeOnlineExperience}
              isChecked={val => state.online_experience === val.value}
            />
            <InputComponent
              updateText={text => this.updateParentData("title", text)}
              value={state.title}
              style={isMobile ? { marginBottom: 20 } : {}}
              maxValue={80}
              label="Professional Title"
              error_message={errorMessageForField("title")}
              error={this.fieldHasError("title")}
              LabelRightNode={({ ...rest }) => (
                <ViewExample {...rest}>See Example</ViewExample>
              )}
              tooltip={
                <ApplicationTooltip
                  style={toolTipStyle}
                  heading="Add a profesional title that describes what you're good at"
                >
                  <p className="last">
                    Need some inspiration? See profile examples from a
                    <a>&nbsp;math tutor</a>,
                    <a>&nbsp;music tutor</a>, and
                    <a>&nbsp;GMAT tutor</a>,
                  </p>
                </ApplicationTooltip>
              }
              placeholder="EXAMPLE: Extremely Experienced IELTS Tutor"
            />
            <TextareaComponent
              rows={10}
              placeholder={proDescription}
              maxValue={500}
              minValue={120}
              style={{ marginBottom: isMobile ? 20 : 20 }}
              updateText={text => this.updateParentData("description", text)}
              value={state.description}
              label={descriptionLabel}
              error_message={errorMessageForField("description")}
              error={this.fieldHasError("description")}
              LabelRightNode={({ ...rest }) => (
                <ViewExample {...rest}>See Example</ViewExample>
              )}
              tooltip={
                <ApplicationTooltip
                  style={toolTipStyle}
                  heading="Let clients know how good a tutor you are"
                >
                  <p>Here is a structure for writing a winning description</p>
                  <p>
                    <b>1st Paragraph:</b> Talk about your level of experience,
                    qualifications, awards
                  </p>
                  <p>
                    <b>2nd Paragraph:</b> Explain your teaching style,
                    curriculum and what clients should expect to learn from you
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <b>3rd Paragraph:</b> Talk about people you've thought, how
                    they improve in their exams, skills, or scores
                  </p>
                  <p className="last">
                    <b>Call to Action:</b> Ask them to hire you
                  </p>
                </ApplicationTooltip>
              }
            />

            <Media query={`(max-width: ${xs}px)`}>
              {matches =>
                matches ? null : (
                  <Column>
                    <StyledNotification bgColor="#fff">
                      <p>
                        Still not sure what to write? See profile examples from
                        a
                        <a>&nbsp;English Tutor</a>
                        , <a>&nbsp;Music Tutor</a> and&nbsp;
                        <a>GMAT Tutor</a>
                      </p>
                    </StyledNotification>
                  </Column>
                )
              }
            </Media>
          </form>
        </Column>
        <ProfileExamples
          innerRef={node => {
            this.rightColumn = node;
          }}
          md={4}
          xs={12}
        />
      </WizardWrapper>
    );
  }
}
export default connect(mapStateToProps)(AboutTutorPage);

const ProfileExamples = styled(Column)`
  display: block;
  @media (max-width: ${xs}px) {
    display: none;
  }
`;
