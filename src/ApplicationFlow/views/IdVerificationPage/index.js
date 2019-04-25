import React from "react";
import { Row, Hidden, Visible, Col as Column } from "react-grid-system";
import styled from "styled-components";
import {
  DefaultButton,
  Flag,
  FormComponent,
  FormInput,
  genericTestStyle,
  Icon,
  InputAddon,
  InputComponent,
  PrimaryButton,
  SuccessButton,
  ButtonWithIcon,
  WizardWrapper
} from "../components/index";

const xs = 1024;
const PageHeader = styled(Column)`
  border: 1px solid #dce0e0;
  border-bottom: none;
  & h1 {
    color: #3d464d;
    font-size: 28px;
    line-height: 36px;
    margin: 24.5px auto 24.5px 44.5px;
    padding: 0;
  }
`;
const PageContent = styled.div`
  ${genericTestStyle} padding: 0px;
  width: 100%;
  margin-top: 28px;
  border: 1px solid #dce0e0;
  @media (max-width: ${xs}px) {
    border: 1px solid #dce0e0;
    background: #ffffff;
  }
  & .PageContent__item {
    border-bottom: 1px solid #dce0e0;
    width: 100%;
    padding: 34px 60px 44px 60px;
    & .item-heading {
      color: #484848;
      font-size: 22px;
      line-height: 28px;
      margin-top: 0;
      margin-bottom: 10px;
    }
    & .item-desc {
      color: #484848;
      font-size: 16px;
      line-height: 24px;
    }
    & .item-input-wrapper {
      display: flex;
      & > div:first-child {
        padding-left: 0 !important;
        flex-grow: 1;
        width: 50% !important;
        float: none;
      }
      & > div:last-child {
        flex-grow: 1;
        width: 50%;
        padding-top: 5px;
        display: flex;
        align-items: center;
        & a {
          cursor: pointer;
        }
      }

      @media (max-width: 767px) {
        flex-direction: column;
        & div,
        & div:first-child {
          width: 100% !important;
        }
      }
    }
    & ol {
      color: #767676;
      font-size: 16px;
      line-height: 24px;
      padding-left: 20px;
      margin-bottom: 30px;
      & li {
        padding-left: 10px;
      }
    }
    &:nth-child(4) {
      border-bottom: none;
    }
  }
  & div.PageContent__ButtonGroup {
    clear: left;
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    & ${PrimaryButton} {
      margin-right: 0;
      border-color: transparent;
    }
    & ${SuccessButton} {
      margin-top: 10px;
      &:first-child {
        margin-right: 20px;
        line-height: 23px;
        font-size: 15px;
      }
    }

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  & > div.PageContent__ButtonGroup {
    padding: 3px 60px 55px 60px;
    justify-content: space-between;
    & button {
      border-radius: 4px;
      font-size: 17px;
      line-height: 22px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    & ${DefaultButton} {
      border: 1px solid #cacaca;
      padding-left: 22px;
      padding-right: 22px;
      color: #777777;
      width: 29%;
      clear: left;
      & i {
        float: left;
      }
    }

    @media (max-width: 767px) {
      & ${DefaultButton} {
        width: 100%;
        margin-bottom: 16px;
      }
      & ${PrimaryButton} {
        width: 100%;
      }
    }
  }
  & ${SuccessButton} {
    width: 100%;
    & span {
      font-size: 15px;
    }
  }
  & .info {
    border: 2px dashed #b2b2b2;
    border-radius: 2px;
    background-color: #fafafa;
    color: #484848;
    padding: 17px;
    display: flex;
    & > div:first-child {
      flex-grow: 1;
      padding-right: 10px;
      & .img-wrapper {
        position: relative;
        & img {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          vertical-align: middle;
          border: 1px solid transparent;
        }
        & svg {
          position: absolute;
          bottom: 0;
          left: 69%;
        }
      }
    }
    & > div:last-child {
      flex-grow: 2;
      padding-left: 10px;
      & h5 {
        font-size: 11px;
        line-height: 14px;
        margin: 0;
        padding-bottom: 3px;
      }
      & p {
        color: #484848;
        font-size: 10px;
        line-height: 14px;
      }
    }
  }
`;
const IconButton = styled(ButtonWithIcon)`
	color: ${props => (props.connectColor ? props.connectColor : "#484848")};
	font-size: 15px;
	line-height: 24px;
	text-align: center;
	border: 1px solid ${props =>
    props.connectColor ? props.connectColor : "#DCE0E0"};
	background-color: #FAFAFA;
	display: flex;
	align-content: center;
  width: 100%;
  margin-right: 14px;
  & rect {
    fill: ${props => (props.connectColor ? props.connectColor : null)};
    &:hover {
      fill: ${props =>
        props.connectHoverColor ? props.connectHoverColor : null};
    }
  }
  & span {
    margin-top: 0;
    padding: 0;
    padding-top: 2px;
    padding-left: 16px;
    display: flex;
    & span {
      display: inline-block;
      padding-left: 5px !important;
      padding-top: 0 !important;
    }
	}
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border-color: ${props =>
      props.connectHoverColor ? props.connectHoverColor : null};
    color: ${props =>
      props.connectHoverColor ? props.connectHoverColor : null};
  }

  @media (max-width: 767px) {
    justify-content: space-between;
    margin-right: 0;
    margin-bottom: 16px;
    & svg {
      flex-grow: 1;
    }
    &>span {
      flex-grow: 1;
      & span {
        flex-grow: 1;
      }
    }
  }
}
`;
const ProgressBar = styled.div`
  height: 10px;
  background-color: #dce0e0;
  width: 100%;
  & > div {
    background-color: #36b37e;
    width: ${props => (props.percentage ? props.percentage : 0)}%;
    height: inherit;
  }
`;
const VerificationDetails = styled(Column)`
  display: block;
  margin-bottom: 20px;
  & > div:first-child > h4 {
    color: #484848;
    font-size: 17px;
    line-height: 22px;
    margin-top: 0;
  }
  & .Verification__thumbnail {
    display: flex;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    padding-left: 0;
    margin-bottom: 0;
    border: 1px solid #dce0e0;
    border-radius: 3px;
    background-color: #ffffff;
    margin-top: 24px;
    & img {
      height: auto;
      width: 100%;
    }
    & div {
      text-align: center;
      padding-top: 9px;
      padding-bottom: 15px;
      & h4 {
        margin: 0;
      }
      & p {
        margin: 0;
      }
    }
  }
  & .Verification__Id-list {
    & ul {
      display: flex;
      flex-direction: column;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      padding-left: 0;
      margin-bottom: 0;
      border: 1px solid #dce0e0;
      border-radius: 3px;
      background-color: #ffffff;
      margin-top: 9px;
      & li {
        align-items: center;
        justify-content: space-between;
        display: flex;
        border-bottom: 1px solid #dce0e0;
        padding: 9px 16px;
        &:last-child {
          border-bottom: 0;
        }
        &.id-list-group-header {
          color: #ffffff;
          font-size: 16px;
          line-height: 20px;
          background: #0064e6;
          & h4 {
            margin: 0;
          }
        }
        & h5 {
          margin-top: 0;
          margin-bottom: 2px;
        }
        & p {
          margin: 0;
        }
      }
    }
  }
  @media (max-width: ${xs}px) {
  }
`;
const ProgressContainer = ({ percentage }) => (
  <ProgressBar percentage={percentage}>
    <div />
  </ProgressBar>
);
class SocialConnectButton extends React.Component {
  authenticate = network => {
    const { updateProfile } = this.props;
    // carry out necessary authentication for each social network
    updateProfile(network);
  };
  render() {
    const { name, network, close, children } = this.props;
    return (
      <IconButton
        name={name}
        onClick={() => this.authenticate(network)}
        connectColor={close ? "#36B37E" : null}
        connectHoverColor={close ? "#36C98E" : null}
      >
        {children}
        {close ? (
          <span style={{ padding: 0 }}>
            <Icon name="close" height={10} width={10} fill={"#36B37E"} />
          </span>
        ) : null}
      </IconButton>
    );
  }
}
class IdVerificationPage extends React.Component {
  state = {
    errors: null,
    phone_number: "",
    email_address: "",
    display_error: false,
    facebookProfile: false,
    googleProfile: false,
    linkedInProfile: false,
    profilePic: "/img/profile/francis2.png"
  };
  updatePhoneNumber = value => {
    let result = [],
      number = parseInt(value, 10);
    result.push(number);
    this.setState({
      phone_number: result
    });
  };
  validatePhoneNumber = e => {
    e.preventDefault();
    // debugger;
    const { phone_number } = this.state;
    const numLength = phone_number.toString().length;
    if (numLength === 10) {
      this.setState({
        display_error: false,
        errors: null
      });
      this.initiateVerification();
    } else {
      this.setState({
        display_error: true,
        errors: "Please make sure you entered the correct phone number!"
      });
    }
    // console.log(this.state.errors);
  };
  initiateVerification = () => {
    // Verify Phone Number
    console.log("Verified");
  };
  authHandler = network => {
    switch (network) {
      case "facebook":
        this.setState({
          facebookProfile: true
        });
        break;
      case "google":
        this.setState({
          googleProfile: true
        });
        break;
      case "linkedIn":
        this.setState({
          linkedInProfile: true
        });
        break;
      default:
        this.setState({
          facebookProfile: false,
          googleProfile: false,
          linkedInProfile: false
        });
        break;
    }
  };

  previousPage = () => {
    this.props.navigateTo(1, 0, "id-verification", "upload-photo");
  };
  render() {
    const { facebookProfile, googleProfile, linkedInProfile } = this.state;
    return (
      <WizardWrapper
        navigationItemStyle={{ backgroundColor: "#FAFAFA" }}
        title=""
        goToNextScreen=""
        hideFooter={true}
        showPreviousScreen={true}
        goToPreviousScreen={this.previousPage}
        contentStyle="margin-top: 60px;"
        noStyle={true}
      >
        <Column md={9} xs={12}>
          <PageHeader>
            <h1>Verify Your Identity</h1>
          </PageHeader>
          <PageContent>
            <div className="PageContent__item">
              <Row>
                <Column md={7} sm={12} xs={12}>
                  <h3 className="item-heading">Provide an offline ID</h3>
                  <p className="item-desc">
                    Take a photo or use your computer webcam to upload a picture
                    of your official ID.
                  </p>
                  <ol>
                    <li>
                      <p>International Passport</p>
                    </li>
                    <li>
                      <p>National ID Card</p>
                    </li>
                    <li>
                      <p>Drivers’ License</p>
                    </li>
                  </ol>
                </Column>
                <Column md={5} sm={12} xs={12}>
                  <SuccessButton style={{ marginBottom: 16 }}>
                    <span>Upload Government ID</span>
                  </SuccessButton>
                  <Hidden xs sm>
                    <div className="info">
                      <div>
                        <div className="img-wrapper">
                          <img src={this.state.profilePic} alt="Profile" />
                          <Icon
                            styled={{ position: "absolute" }}
                            name="checked"
                          />
                        </div>
                      </div>
                      <div>
                        <h5>Why Verify?</h5>
                        <p>
                          You get a verified badge on your profile once you
                          upload an ID and clients get to trust you more.
                        </p>
                      </div>
                    </div>
                  </Hidden>
                </Column>
              </Row>
              <div style={{ display: "flex" }}>
                <Icon name="lock" />
                <p
                  style={{
                    color: "#36B37E",
                    lineHeight: "18px",
                    paddingLeft: 10
                  }}
                >
                  Your ID is safe with us and will not be shared with client.
                </p>
              </div>
            </div>
            <div className="PageContent__item">
              <h3 className="item-heading">
                Connect at least one social account
              </h3>
              <p className="item-desc">
                Bring your reputation with you! Link at least one accounts from
                these sites to tell us more about you.
              </p>
              <div className="PageContent__ButtonGroup">
                <SocialConnectButton
                  name="fbSimple"
                  network="facebook"
                  updateProfile={this.authHandler}
                  close={facebookProfile}
                >
                  {facebookProfile ? "Facebook Connected!" : "Connect Facebook"}
                </SocialConnectButton>
                <SocialConnectButton
                  name="googlePlus"
                  network="google"
                  updateProfile={this.authHandler}
                  close={googleProfile}
                >
                  {googleProfile ? "Google Connected!" : "Connect Google"}
                </SocialConnectButton>
                <SocialConnectButton
                  name="linkedIn"
                  network="linkedIn"
                  updateProfile={this.authHandler}
                  close={linkedInProfile}
                >
                  {linkedInProfile ? "LinkedIn Connected!" : "Connect LinkedIn"}
                </SocialConnectButton>
              </div>
            </div>
            <div className="PageContent__item">
              <h3 className="item-heading">Phone Verification</h3>
              <p className="item-desc">
                We’ll send you a 4-digit code to verify your phone number. It
                can also serve as a way to secure your account.
              </p>
              <div style={{ paddingTop: 30 }}>
                <Row>
                  <Column
                    md={5}
                    xs={12}
                    style={{
                      paddingRight: "12.5px",
                      width: "39%"
                    }}
                  >
                    <FormComponent
                      noColumn
                      label="Primary phone number"
                      error_message={this.state.errors}
                      error={this.state.display_error}
                      className="ind-items"
                      style={{ marginBottom: 0 }}
                    >
                      <InputAddon
                        noColumn
                        style={{
                          borderRadius: 2
                        }}
                      >
                        <Flag style={{ width: "22.6%" }}>
                          <span>+234</span>
                        </Flag>
                        <FormInput
                          maxValue={10}
                          className="add-on__input"
                          type="tel"
                          value={this.state.phone_number}
                          onChange={e => this.updatePhoneNumber(e.target.value)}
                          placeholder="8078368264"
                          style={{
                            width: "77.4%",
                            paddingTop: 13.5,
                            paddingBottom: 13.5
                          }}
                        />
                      </InputAddon>
                    </FormComponent>
                  </Column>
                  <Column
                    md={7}
                    xs={12}
                    style={{ paddingLeft: "12.5px", width: "61%" }}
                  >
                    <div className="PageContent__ButtonGroup">
                      <SuccessButton onClick={this.validatePhoneNumber}>
                        <span>Verify via SMS</span>
                      </SuccessButton>
                      <SuccessButton onClick={this.validatePhoneNumber}>
                        <span>Verify via Call</span>
                      </SuccessButton>
                    </div>
                  </Column>
                </Row>
              </div>
            </div>
            <div className="PageContent__item">
              <h3 className="item-heading">Email Verification</h3>
              <div className="item-input-wrapper">
                <InputComponent
                  label="Your email address"
                  style={{ marginBottom: 10 }}
                  error_message=""
                  error=""
                  type="email"
                  placeholder="busybenson@yahoo.com"
                  updateText={() => null}
                />

                <div>
                  <a>Resend Confirmation Email</a>
                </div>
              </div>
            </div>
            <div className="PageContent__ButtonGroup">
              <DefaultButton onClick={this.previousPage}>
                <Icon name="angle-left" />
                &nbsp;
                <span>Back</span>
              </DefaultButton>
              <PrimaryButton>
                <span>Complete Verification</span>
              </PrimaryButton>
            </div>
          </PageContent>
        </Column>
        <VerificationDetails md={3} xs={12}>
          <div>
            <div>
              <h4>Verification Progress:</h4>
              <ProgressContainer percentage={31} />
            </div>
            <div className="Verification__thumbnail">
              <img src={this.state.profilePic} alt="[Profile]" />
              <div>
                <h4>Godwin Benson</h4>
                <p>Lagos, Nigeria.</p>
              </div>
            </div>
            <div className="Verification__Id-list">
              <ul className="id-list-group">
                <li className="id-list-group-header">
                  <h4>Verified ID</h4>
                </li>
                <li className="id-list-group-item">
                  <div>
                    <h5>Offline ID</h5>
                    <p>Government Issued ID</p>
                  </div>
                  <span>
                    <Icon name="lock" />
                  </span>
                </li>
                <li className="id-list-group-item">
                  <div>
                    <h5>Facebook</h5>
                    <p>Godwin Benson</p>
                  </div>
                  <span>
                    <Icon name="facebook" />
                  </span>
                </li>
                <li className="id-list-group-item">
                  <div>
                    <h5>Email Address</h5>
                    <p>Verified</p>
                  </div>
                  <span>
                    <Icon name="email" />
                  </span>
                </li>
                <li className="id-list-group-item">
                  <div>
                    <h5>Phone Number</h5>
                    <p>+2348183906719</p>
                  </div>
                  <span>
                    <Icon name="phone" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </VerificationDetails>
      </WizardWrapper>
    );
  }
}

export default IdVerificationPage;
