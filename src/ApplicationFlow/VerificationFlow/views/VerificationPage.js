import React from "react";
import { Row, Hidden, Visible, Col as Column } from "react-grid-system";
import styled, { css } from "styled-components";
import WizardWrapper from "../../views/components/WizardPage";
import { genericTestStyle } from "../../components/layout/ContentStyle";
import {
  DefaultButton,
  PrimaryButton,
  SuccessButton,
  ButtonWithIcon
} from "../../components/simple/Button";
import { InputAddon } from "../../components/simple/InputAddon";
import Flag from "../../components/simple/CountryFlag";
import FormComponent from "../../views/components/FormComponent";
import FormInput from "../../components/simple/Input";
import Icon from "../../components/simple/Icon";
import { ProgressBar } from "../../components/simple/ProgressBar";

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
    @media (max-width: 767px) {
      padding: 17px 30px;
    }
    & .item-heading {
      color: #484848;
      font-size: 22px;
      line-height: 28px;
      margin-top: 0;
      margin-bottom: 10px;
    }
    & .item-desc {
      padding-bottom: 14px;
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
    & .PageContent__item--flexContainer {
      display: flex;
      flex-wrap: wrap;
      & .col {
        flex: 0 0 100%;
        max-width: 100%;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
      }
      @media (min-width: 768px) {
        & .col-5 {
          flex: 0 0 41.67%;
          max-width: 41.67%;
        }
        & .col-7 {
          flex: 0 0 58.33%;
          max-width: 58.33%;
        }
      }
      @media (max-width: 767px) {
        & .col {
          padding-right: 0;
          padding-left: 0;
        }
      }
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
    & ${PrimaryButton} {
      margin-bottom: 0;
      width: 40.5%;
    }
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
      padding: 17px 30px;
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
  padding: 12px;
  outline: none;
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
    padding-left: ${props => props.padding};
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
  &:disabled {
    border-color: ${props =>
      props.connectHoverColor ? props.connectHoverColor : null};
    color: ${props =>
      props.connectHoverColor ? props.connectHoverColor : null};
    background-color: #FAFAFA;
    
    &:hover {
      border-color: ${props =>
        props.connectHoverColor ? props.connectHoverColor : null};
      color: ${props =>
        props.connectHoverColor ? props.connectHoverColor : null};
    }
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

const Div = styled.div`
  ${props => props.css};
`;

const Ul = styled.ul`
  ${props => props.css};
`;

const VerificationItem = ({ title, text, icon, show, heading = false }) => {
  return (
    <li className={heading ? "id-list-group-header" : "id-list-group-item"}>
      <div>
        <h5>{title}</h5>
        {text && <p>{text}</p>}
      </div>
      {icon ? (
        <span>
          <Icon name={icon} />
        </span>
      ) : null}
    </li>
  );
};

const VerificationDetail = ({
  profileInfo,
  user,
  state,
  filter,
  children,
  offlineId,
  socialID,
  emailVerified,
  verifiedPhoneNumber
}) => (
  <Div
    css={css`
      & h4 {
        color: #484848;
      }
      & .profileDetail {
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
          margin: 0;
          & h4 {
            margin: 0;
            color: #3d464d;
            font-size: 16px;
            line-height: 20px;
          }
          & p {
            color: #848484;
            font-size: 12px;
            line-height: 15px;
            margin: 0;
          }
        }
      }
    `}
  >
    <h4>Verification Progress:</h4>
    <ProgressBar
      height={10}
      width={100}
      bgColor="#36B37E"
      percentage={user.percentageCompleted ? user.percentageCompleted : null}
    >
      <div />
    </ProgressBar>
    <div className="profileDetail">
      <img src={profileInfo.image} alt="[Profile]" />
      <div>
        <h4>
          {profileInfo.firstName} {profileInfo.lastName}
        </h4>
        <p>
          {profileInfo.state}, {profileInfo.country}
        </p>
      </div>
    </div>
    <Ul
      css={css`
        display: flex;
        flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        padding-left: 0;
        margin-bottom: 16px;
        border-radius: 3px;
        background-color: #ffffff;
        margin-top: 9px;
        & li {
          align-items: center;
          justify-content: space-between;
          display: flex;
          border-right: 1px solid #dce0e0;
          border-left: 1px solid #dce0e0;
          border-bottom: 1px solid #dce0e0;
          padding: 16px;
          &.id-list-group-header {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-color: transparent;
            color: #ffffff;
            font-size: 16px;
            line-height: 20px;
            background: #0064e6;
            & h5 {
              font-size: 18px;
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
      `}
    >
      <VerificationItem heading title="Verified ID" />
      {offlineId ? (
        <VerificationItem
          title="Offline ID"
          text="Government Issued ID"
          icon="lock"
        />
      ) : null}
      {Array.isArray(socialID) && socialID.length !== 0
        ? socialID.map(
            (elem, index) =>
              Object.keys(socialNetwork).indexOf(elem.network) > -1 ? (
                <VerificationItem
                  key={socialNetwork[elem.network].name}
                  title={socialNetwork[elem.network].name}
                  text={elem.userName}
                  icon={socialNetwork[elem.network].icon}
                />
              ) : null
          )
        : null}
      {emailVerified ? (
        <VerificationItem title="Email Address" text="Verified" icon="email" />
      ) : null}
      {verifiedPhoneNumber ? (
        <VerificationItem
          title="Phone Number"
          key={verifiedPhoneNumber.number}
          text={verifiedPhoneNumber.number}
          icon="phone"
        />
      ) : null}
    </Ul>
    {children}
  </Div>
);
const user = {
  firstName: "Godwin",
  lastName: "Benson",
  profilePic: "/img/profile/francis2.png",
  location: {
    state: "Lagos",
    country: "Nigeria"
  },
  offlineId: true,
  socialID: [
    {
      network: "google",
      userName: "Godwin Benson",
      verified: true
    }
  ],
  email: "busybenson@yahoo.com",
  email_verified: true,
  phone: [
    {
      number: "+2348183906719",
      verified: true,
      primary: true
    } /*,
    {
      number: "+2348157906719",
      verified: false,
      primary: false
    }*/
  ],
  percentageCompleted: 60
};
const socialNetwork = {
  facebook: {
    name: "Facebook",
    icon: "facebook"
  },
  google: {
    name: "Google",
    icon: "google"
  },
  linkedin: {
    name: "LinkedIn",
    icon: "linkedin"
  }
};

class SocialConnectButton extends React.Component {
  state = {
    google: user.socialID[0],
    facebook: {
      network: "facebook",
      userName: "Godwin Benson",
      verified: false
    },
    linkedin: {
      network: "linkedin",
      userName: "Godwin Benson",
      verified: false
    }
  };

  render() {
    const { socialMedia, verifySocialNetwork } = this.props;
    return (
      <div className="PageContent__ButtonGroup">
        {socialMedia.map((media, index) => (
          <IconButton
            name={media.icon}
            onClick={() =>
              verifySocialNetwork(this.state, media.name.toLowerCase())
            }
            connectColor={
              this.state[media.name.toLowerCase()].verified ? "#36B37E" : null
            }
            connectHoverColor={
              this.state[media.name.toLowerCase()].verified ? "#36C98E" : null
            }
            padding={
              this.state[media.name.toLowerCase()].verified ? "10px" : "16px"
            }
            disabled={this.state[media.name.toLowerCase()].verified}
          >
            {this.state[media.name.toLowerCase()].verified
              ? `${media.name} Connected!`
              : `Connect ${media.name}`}
            {this.state[media.name.toLowerCase()].verified ? (
              <span style={{ padding: 0 }}>
                <Icon name="close" height={10} width={10} fill={"#36B37E"} />
              </span>
            ) : null}
          </IconButton>
        ))}
      </div>
    );
  }
}

const filterArr = user.phone.filter(x => x.primary && x.verified);

class PhoneComponent extends React.Component {
  state = {
    errors: null
  };

  updatePhoneNumber = value => {
    let result = [],
      number = parseInt(value, 10);
    result.push(number);
    if (this.state.verified === false) {
      this.setState({
        phone_number: result
      });
    } else if (this.state.verified === true) {
      this.setState({
        phone_number: result,
        verified: false
      });
    }
  };

  getPrimaryPhoneNumber = arrayOfPhoneNumbers =>
    arrayOfPhoneNumbers.find((number, i) => number.primary);

  formatPrimaryPhoneNumber = primaryPhoneNumber =>
    primaryPhoneNumber.substring(4);

  render() {
    const { phoneNumbers } = this.props;
    const primaryPhoneNumber = this.getPrimaryPhoneNumber(phoneNumbers);
    return (
      <div className="PageContent__item">
        <h3 className="item-heading">Phone Verification</h3>
        {primaryPhoneNumber.verified ? (
          <p className="item-desc" style={{ paddingBottom: 30 }}>
            Your phone number has been verified!
          </p>
        ) : (
          <p className="item-desc" style={{ paddingBottom: 30 }}>
            We’ll send you a 4-digit code to verify your phone number. It can
            also serve as a way to secure your account.
          </p>
        )}
        <div className="PageContent__item--flexContainer">
          <div
            className="col col-5"
            style={{
              paddingLeft: 0
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
                  value={this.formatPrimaryPhoneNumber(
                    primaryPhoneNumber.number
                  )}
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
          </div>
          <div className="col col-7" style={{ paddingRight: 0 }}>
            {primaryPhoneNumber.verified ? null : (
              <div className="PageContent__ButtonGroup">
                <SuccessButton
                  onClick={e =>
                    this.props.updatePhoneNumber(e, primaryPhoneNumber)
                  }
                >
                  <span>Verify via SMS</span>
                </SuccessButton>
                <SuccessButton
                  onClick={e =>
                    this.props.updatePhoneNumber(e, primaryPhoneNumber)
                  }
                >
                  <span>Verify via Call</span>
                </SuccessButton>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class OfflineIdButton extends React.Component {
  render() {
    return (
      <SuccessButton
        style={{ marginBottom: 16 }}
        disabled={this.props.offlineId}
        onClick={this.props.onClick}
      >
        {this.props.offlineId ? (
          <span>Government Issued ID uploaded</span>
        ) : (
          <span>Upload Government ID</span>
        )}
      </SuccessButton>
    );
  }
}

class IdVerificationPage extends React.Component {
  state = {
    email_address: "",
    offlineId: user.offlineId,
    socialID: user.socialID,
    verifiedPhoneNumber: {},
    phoneNumber: user.phone,
    email: user.email,
    emailVerified: user.email_verified
  };

  updatePhoneNumber = value => {
    if (Array.isArray(user.phone) && user.phone.length !== 0) {
      if (filterArr.length === 0) {
        let result = [],
          number = parseInt(value, 10);
        result.push(number);
        this.setState({
          phone_number: result
        });
      } else if (filterArr.length > 0) {
        this.setState({
          display_error: true,
          errors: "Your phone number has already been verified"
        });
      }
    }
  };

  nextPage = () => {
    this.props.navigateTo(0, "id-verification", "congratulations");
  };

  previousPage = () => {
    this.props.navigateTo(0, "id-verification", "start");
  };

  toggleOfflineIdStatus = () => {
    this.setState({
      offlineId: !this.state.offlineId
    });
  };

  verifySocialNetwork = (networks, network) => {
    const networkToAdd = networks[network];
    networkToAdd.verified = true;
    if (this.state.socialID !== undefined) {
      this.setState({
        socialID: [...this.state.socialID, networkToAdd]
      });
      return;
    }
    return false;
  };

  updatePhoneNumber = (e, primaryPhoneNumber) => {
    e.preventDefault();
    primaryPhoneNumber.verified = true;
    this.setState({
      phoneNumber: [...this.state.phoneNumber, primaryPhoneNumber]
    });
  };

  verifyEmail = () => {
    this.setState({
      emailVerified: !this.state.emailVerified
    });
  };

  render() {
    const { profilePic, firstName, lastName, location } = user;
    const socialMedia = [
      { name: "Facebook", icon: "fbSimple" },
      { name: "Google", icon: "googlePlus" },
      { name: "Linkedin", icon: "linkedIn" }
    ];
    return (
      <WizardWrapper
        navigationItemStyle={{ backgroundColor: "#FAFAFA" }}
        title=""
        goToNextScreen={this.nextPage}
        hideFooter={true}
        showPreviousScreen={true}
        goToPreviousScreen={this.previousPage}
        nextButtonText="I'm Done! Let's Proceed"
        contentStyle="margin-top: 60px;"
        noStyle={true}
      >
        <Column md={9} xs={12}>
          <PageHeader>
            <h1>Verify Your Identity</h1>
          </PageHeader>
          <PageContent>
            <div className="PageContent__item">
              <div className="PageContent__item--flexContainer">
                <div className="col col-7">
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
                </div>
                <div className="col col-5">
                  <OfflineIdButton
                    offlineId={this.state.offlineId}
                    onClick={this.toggleOfflineIdStatus}
                  />
                  <Hidden xs sm>
                    <div className="info">
                      <div>
                        <div className="img-wrapper">
                          <img src={profilePic} alt="Profile" />
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
                </div>
              </div>
              <div style={{ display: "flex", paddingLeft: "16px" }}>
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
              <SocialConnectButton
                socialMedia={socialMedia}
                socialMediaStatus={this.state.socialID}
                verifySocialNetwork={this.verifySocialNetwork}
              />
            </div>
            <PhoneComponent
              phoneNumbers={this.state.phoneNumber}
              updatePhoneNumber={this.updatePhoneNumber}
            />
            <div className="PageContent__item">
              <h3 className="item-heading">Email Verification</h3>
              <div className="item-input-wrapper">
                <FormComponent
                  label="Your email address"
                  style={{ marginBottom: 10 }}
                >
                  <FormInput
                    type="email"
                    placeholder="busybenson@yahoo.com"
                    value={this.state.email}
                    onChange={() => {}}
                  />
                </FormComponent>
                <div>
                  {this.state.emailVerified ? (
                    <p>Email Verified</p>
                  ) : (
                    <a onClick={this.verifyEmail}>Send Confirmation Email</a>
                  )}
                </div>
              </div>
            </div>
            <div className="PageContent__ButtonGroup">
              <DefaultButton onClick={this.previousPage}>
                <Icon name="angle-left" />
                &nbsp;
                <span>Back</span>
              </DefaultButton>
              <PrimaryButton onClick={this.nextPage}>
                <span>Complete Verification</span>
              </PrimaryButton>
            </div>
          </PageContent>
        </Column>
        <Column md={3} xs={12}>
          <VerificationDetail
            profileInfo={{
              image: profilePic,
              firstName: firstName,
              lastName: lastName,
              state: location.state,
              country: location.country
            }}
            offlineId={this.state.offlineId}
            user={user}
            state={this.state}
            network={socialMedia}
            socialID={this.state.socialID}
            phoneNumbers={this.state.phoneNumber}
            emailVerified={this.state.emailVerified}
            verifiedPhoneNumber={this.state.phoneNumber.find(
              (number, i) => number.primary && number.verified
            )}
          />
        </Column>
      </WizardWrapper>
    );
  }
}

export default IdVerificationPage;
