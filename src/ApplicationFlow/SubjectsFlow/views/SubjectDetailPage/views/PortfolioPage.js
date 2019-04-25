import React from "react";
import styled, { css } from "styled-components";
import {
  PrimaryButton,
  DefaultButton,
  Icon,
  NoticeAction,
  FormComponent,
  ApplicationTooltip,
  UploadComponent
} from "./components";
import Wrapper from "./Wrapper";
import Dropzone from "react-dropzone";
const PageNoticeAction = styled(NoticeAction)`
  & p.note {
    line-height: 24px;
    color: #484848;
    font-size: 17px;
    padding-left: 7px;
    padding-right: 38.5px;
    & ul {
      margin-bottom: 0;
      & li {
        font-size: 15px;
        font-weight: 300;
        line-height: 26px;
      }
    }
  }
`;
const MyFormComponent = styled(FormComponent)`
  padding-top: 4px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  &:not(:only-child):first-child {
    padding-bottom: 46px;
    border-bottom: 1px solid #f0f0f0;
  }
  & label {
    display: none !important;
  }
`;
const InfoHeader = styled.div`
  clear: left;
  padding: 14px 0;
  & h3 {
    font-size: 22px;
    line-height: 28px;
    margin: 0;
    padding-bottom: 9px;
  }
  & p {
    color: #484848;
    font-size: 17px;
    line-height: 18px;
  }
`;

const Div = styled.div`
  ${props => props.css};
`;
const StyledDropZone = styled(Dropzone)`
  ${props => props.css};
`;
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}
class UploadedComponent extends React.Component {
  state = {
    image: ""
  };
  afterUpload = image => {
    this.setState({ image });
  };
  componentDidMount() {
    this.afterUpload(this.props.image);
  }
  getStyle = () => {
    const { image } = this.state;
    const shared = `
    position: relative;
    border: 1px ${image ? "solid #484848" : "dashed #b2b2b2"};
    min-height: 260px;
    min-width: 345px;
    & img {
      max-width: 100%;
      max-height: 100%;
    }
    & button {
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      background: rgba(54, 179, 126, 0.69);
      color: #ffffff;
      font-size: 19px;
      line-height: 24px;
      border: none;
      padding: 15px 75px;
    }
    & p {
      color: #484848;
      font-size: 17px;
      line-height: 24px;
      & input[type="file"] {
        position: absolute;
        visibility: hidden;
      }
      & a {
        color: #36b37e;
        &:hover{
          cursor: pointer;
        }
      }
    }`;
    const uploadStyle = `
          ${shared}
          background-color: #fafafa;
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 72px 80px;
          &:hover {
            cursor: pointer;
          }
          & div {
            text-align: center;
          }
          `;
    return image ? shared : uploadStyle;
  };
  onDrop = (accepted, rejected) => {
    this.afterUpload(accepted[0].preview);
  };
  render() {
    const { image } = this.state;
    const Parent = !!image ? Div : StyledDropZone;
    return (
      <UploadComponent
        postAction={this.afterUpload}
        image={image}
        render={(uploadInput, onClick) => {
          return (
            <Parent
              css={css`
                ${this.getStyle()};
              `}
              accept="image/jpeg, image/png"
              onDrop={this.onDrop}
            >
              {image ? (
                <img src={image} alt="Upload exhibit" />
              ) : (
                <div>
                  <Icon name="image" />
                </div>
              )}
              {image ? (
                <button>
                  <Icon />Set as cover photo
                </button>
              ) : (
                <p>
                  {uploadInput}
                  Drag a Photo or <a onClick={onClick}>Browse</a>
                </p>
              )}
            </Parent>
          );
        }}
      />
    );
  }
}
const FileUpload = () => {
  return (
    <Div
      css={css`
        display: flex;
        & div:first-child {
          margin-right: 15px;
        }
        & div:last-child {
          margin-left: 15px;
        }
      `}
    >
      <UploadedComponent image="/img/profile/exhibit.png" />
      <UploadedComponent />
    </Div>
  );
};

class PortfolioPage extends React.Component {
  chargeUpdate = e => {};
  discountUpdate = e => {};
  componentDidMount() {}
  render() {
    return (
      <Wrapper
        step={3}
        toolTip={
          <ApplicationTooltip
            heading="Upload only your best work"
            style={{ marginTop: "185px" }}
          >
            <p>
              36% of Tutors who upload their best works get more deals than
              those who don’t. <strong>So why not upload yours?</strong>
            </p>
          </ApplicationTooltip>
        }
        {...this.props}
      >
        {({ width, position }) => {
          return (
            <div>
              <InfoHeader>
                <h3>Add a Gallery or Portfolio (optional)</h3>
                <p>
                  Upload 2-6 high quality exhibits of your work to showcase your
                  expertise.
                </p>
              </InfoHeader>
              <MyFormComponent>
                <FileUpload />
                <PageNoticeAction
                  style={{ marginBottom: 10 }}
                  bgColor="rgba(54,179,126,0.1)"
                  borderColor="#36B37E"
                  condition={true}
                >
                  <div>
                    <p className="note">
                      <ul>
                        <li>
                          Image should not contain any contact information such
                          as email or phone.
                        </li>
                        <li>
                          Upload high quality images to attract the best
                          clients.
                        </li>
                        <li>
                          Only upload YOUR OWN work. Don’t copy from the
                          internet
                        </li>
                      </ul>
                    </p>
                  </div>
                </PageNoticeAction>
              </MyFormComponent>
            </div>
          );
        }}
      </Wrapper>
    );
  }
}
export default PortfolioPage;
