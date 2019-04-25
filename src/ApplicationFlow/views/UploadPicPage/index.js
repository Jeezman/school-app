import React from "react";
import styled from "styled-components";
import { Col as Column } from "react-grid-system";
import Media from "react-media";
import ReactModal from "react-modal";
import Cropper from "react-cropper";
import { connect } from "react-redux";

import {
  CloseButton,
  Content,
  DefaultButton,
  Div,
  globals,
  Icon,
  ImageNotice,
  PrimaryButton,
  Summary,
  Tooltip,
  UploadComponent,
  WizardWrapper
} from "../components/index";
import { BASE_PATH } from "../../fonts/index";
import "./cropper.css";
import { mapStateToProps, UPDATE_IMAGE } from "./reducers";
const { xs } = globals;
const { siteText } = globals;
const CropperContainer = styled.div`
  flex: 1;
  padding-right: 26px;
  border-right: 1px solid #f0f0f0;
  & > h2 {
    margin: 24px auto;
    font-size: 19px;
    font-weight: 300px;
    color: #484848;
  }
  & > label {
    overflow: hidden;
    position: relative;
    color: #0064e6;
    font-weight: bold;
    font-size: 19px;
    cursor: pointer;
    & > input {
      cursor: inherit;
      display: block;
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }
  }
`;
const CroppedContainer = styled.div`
  flex: 1;
  padding-left: 56px;
  color: #484848;
  & > div {
    max-width: 243px;
    margin-left: auto;
    margin-right: auto;
    & ${PrimaryButton},& ${DefaultButton} {
      display: block;
      width: 100%;
    }
    & ${DefaultButton} {
      border: none;
    }
    & > h2 {
      text-align: center;

      font-size: 20px;
    }
    & > img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50%;
      border: 1px solid transparent;
    }
    & > p {
      font-size: 16px;
    }
  }
`;
const ModalBody = styled.div`
  display: flex;
  padding: 24px 35px 24px 53px;
`;
const Modal = styled(ReactModal)`
  position: absolute;
  ${siteText} max-width: 812px;
  top: 40px;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 40px;
  border: 1px solid #ccc;
  background: #fff;
  overflow: auto;
  overflow-scrolling: touch;
  border-radius: 4px;
  outline: none;
  padding: 0;
  & .modal-header {
    position: relative;
    background-color: #fafafa;
    padding: 24px 35px 24px 53px;
    & h2 {
      margin-top: 0;
    }
  }
`;
const UploadTextContainer = styled.div`
  margin-left: 37px;
  color: #47525d;
  position: relative;
  @media (max-width: ${xs}px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & h2 {
    @media (max-width: ${xs}px) {
      line-height: 22px !important;
      font-size: 17px !important;
      font-weight: 500;
      margin-bottom: 5px !important;
    }
  }
  & p {
    @media (max-width: ${xs}px) {
      text-align: center;
      color: #767676;
      line-height: 20px;
      font-size: 14px;
      margin-bottom: 16px;
    }
  }
  & input[type="file"] {
    position: absolute;
    visibility: hidden;
  }
  & ${PrimaryButton} {
    padding-left: 34px;
    padding-right: 34px;
    background-color: ${props => (props.completed ? "#fff" : "")};
    color: ${props => (props.completed ? "#0064E6" : "")};
    & > i {
      margin-right: 8px;
    }
    @media (max-width: ${xs}px) {
      background-color: ${props => (props.completed ? "#fff" : "#36B37E")};
      border: 2px solid ${props => (props.completed ? "" : "#36B37E")};
      border-radius: 2px;
      font-size: 16px;
      padding-right: 28px;
      & > i {
        margin-right: 0;
      }
      & > span {
        padding-left: 17px;
      }
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  border: 1px dashed #b2b2b2;
  padding: 26px 27px 37px 44px;
  margin-bottom: 32px;

  @media (max-width: ${xs}px) {
    flex-direction: column;
    align-items: center;
    padding: 24px 26px 26px 26px;
    margin-bottom: 23px;
  }
  & h2 {
    font-size: 20px;
    line-height: 40px;
    margin: 0 auto;
  }
  & p {
  }
  & .img-house {
    position: relative;
    height: 134px;
    @media (max-width: ${xs}px) {
      height: auto;
      margin-bottom: 17px;
    }
    & > img {
      width: 134px;
      height: 134px;
      margin-top: 13px;
      vertical-align: middle;
      display: inline-block;
      border: 2px solid transparent;
      border-radius: 50%;
      @media (max-width: ${xs}px) {
        width: 110px;
        height: 110px;
        margin-top: 0;
      }
      & + i {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 10;
        font-size: 35px;
        color: #0064e6;
        margin-bottom: 8px;
      }
    }
    & svg {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

const ImageOptions = styled.div`
  margin-top: 19px;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${xs + 1}px) {
    justify-content: space-between;
    width: 230px;
  }
  & img {
    width: 112px;
    height: 104px;
    display: inline-block;
    margin-bottom: 8px;
    @media (max-width: ${xs}px) {
      width: 33.33%;
      height: 100px;
      &:last-child {
        display: none;
      }
    }
  }
`;
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

class ImageUpload extends React.Component {
  state = {
    image: ""
  };
  componentDidMount() {
    this.updateLocal(this.props.image);
  }
  updateLocal = image => {
    this.setState({ image });
  };
  afterUpload = image => {
    this.updateLocal(image);
    this.props.updateImage(image);
    this.props.handleOpenModal();
  };
  componentWillReceiveProps(nextProps) {
    if (this.state.image !== nextProps.image) {
      this.updateLocal(nextProps.image);
    }
  }
  render() {
    const { uploaded } = this.props;

    return (
      <UploadComponent
        image={this.state.image}
        postAction={this.afterUpload}
        render={(fileInput, onClick) => {
          return (
            <ImageContainer>
              <div className="img-house">
                <img src={this.state.image} alt="upload" />
                {uploaded ? (
                  <Icon
                    width={35}
                    borderColor="#FFFFFF"
                    bgColor="#0064E6"
                    name="check-circle"
                  />
                ) : null}
              </div>
              <UploadTextContainer completed={uploaded}>
                <h2>
                  {uploaded ? "Looking good!" : "Upload a great photo of you"}
                </h2>
                <Media query={`(max-width: ${xs}px)`}>
                  {matches =>
                    matches ? (
                      <p>
                        Please make sure your photo clearly shows your face and
                        smile
                      </p>
                    ) : (
                      <p>
                        {uploaded
                          ? `This photo will be added to your profile, shared with future clients or users.`
                          : `Tutors with a friendly, professional-looking portraits are hired 5
                  times more often.`}
                      </p>
                    )
                  }
                </Media>
                {fileInput}
                <PrimaryButton onClick={onClick}>
                  <Icon name="cloud-upload" />
                  <span>{uploaded ? `Change Photo` : `Add my Photo Now`}</span>
                </PrimaryButton>
              </UploadTextContainer>
            </ImageContainer>
          );
        }}
      />
    );
  }
}
class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      croppedImage: ""
    };
    this.file = null;
  }
  saveImage = () => {
    this.props.updateImage(this.state.croppedImage);
    this.props.handleCloseModal(false);
  };
  _crop = () => {
    // image in dataUrl
    this.setState({
      croppedImage: this.refs.cropper.getCroppedCanvas().toDataURL()
    });
  };
  componentDidMount() {
    this.updateImage(this.props);
  }
  updateImage(props) {
    this.setState(state => ({
      ...state,
      image: props.image,
      croppedImage: props.image
    }));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.image !== nextProps.image) {
      this.updateImage(nextProps);
    }
  }
  onUploadClick = () => {
    this.file.click();
  };
  handleFileUpload = e => {
    var reader = new FileReader();

    reader.onload = es => {
      this.setState({ image: es.target.result });
    };
    const files = e.target.files;
    if (files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  rotate = () => {
    this.refs.cropper.rotate(90);
  };
  render() {
    return (
      <Modal isOpen={this.props.showModal} contentLabel="Minimal Modal Example">
        <div className="modal-header">
          <h2>Edit and Resize Your Profile Photo</h2>
          <CloseButton onClick={this.props.handleCloseModal}>
            <Icon name="close" />
          </CloseButton>
        </div>
        <ModalBody>
          <CropperContainer>
            <Cropper
              ref="cropper"
              src={this.state.image}
              style={{ height: 290, width: "100%" }}
              // Cropper.js options
              aspectRatio={1 / 1}
              guides={false}
              moveable={false}
              zoomable={false}
              background={false}
              dragMode="none"
              cropBoxResizable={true}
              crop={this._crop.bind(this)}
            />
            <button onClick={this.rotate}>Rotate</button>
            <h2>Drag the handles to adjust portrait</h2>
            <label htmlFor="file" onClick={this.onUploadClick}>
              Upload a different photo
              <input
                ref={input => (this.file = input)}
                type="file"
                onChange={this.handleFileUpload}
                name="file"
              />
            </label>
          </CropperContainer>
          <CroppedContainer>
            <div>
              <h2>Your profile picture</h2>
              <img src={this.state.croppedImage} alt="upload" />
              <p>
                This must be an actual picture of you! Make sure it’s very
                clear, attractive and be sure you put on a smile in the photo.
              </p>
              <PrimaryButton onClick={this.saveImage}>Save photo</PrimaryButton>
              <DefaultButton onClick={this.props.handleCloseModal}>
                Cancel
              </DefaultButton>
            </div>
          </CroppedContainer>
        </ModalBody>
      </Modal>
    );
  }
}
class TutorProfilePage extends React.Component {
  state = {
    showModal: false,
    uploaded: false,
    image: `${BASE_PATH}img/circle-09.svg`,
    uploadedImage: ""
  };
  handleOpenModal = () => {
    this.setState({ showModal: true, uploaded: false });
  };
  componentDidMount() {
    const image = this.props.image;
    this.setState({ uploadedImage: image });
  }
  handleCloseModal = (valid = true) => {
    this.setState({ showModal: false });
    if (valid) {
      this.setState({ uploaded: false });
    }
  };
  updateUploadedImage = image => {
    this.setState(state => ({ ...state, uploadedImage: image }));
    this.props.dispatch({ type: UPDATE_IMAGE, value: { image } });
  };
  updateImage = image => {
    //   debugger;
    this.setState(state => ({
      ...state,
      uploaded: true,
      image,
      uploadedImage: image
    }));
  };
  formHasErrors = () => {
    return !!this.state.uploadedImage;
  };
  validateForm = () => {
    if (this.formHasErrors()) {
      this.props.navigateTo(0, 20, "upload-photo", "id-verification");
    }
  };
  previousPage = () => {
    this.props.navigateTo(1, "upload-photo", "about-tutor");
  };
  render() {
    const imgages = [
      "Rectangle 17 Copy 3@2x.png",
      "Rectangle 17 Copy@2x.png",
      "Rectangle 17 Copy 5@2x.png",
      "Rectangle 17 Copy 2@2x.png"
    ];
    const getProgress = () => {
      const progress = this.props.progressBar.reduce(
        (sum, value) => sum + value,
        0
      );
      return progress;
    };
    return (
      <WizardWrapper
        title="Step 3: Tutor Profile"
        nextButtonText="Next: Tutor Profile Info"
        goToNextScreen={this.validateForm}
        showPreviousScreen={true}
        showNextScreen={!this.formHasErrors()}
        goToPreviousScreen={this.previousPage}
        progress={getProgress()}
      >
        <Content>
          <Column md={8}>
            <Column>
              <MobileDiv>
                <h2>Let’s add your photo</h2>
                <Media query={`(max-width: ${xs}px)`}>
                  {matches =>
                    matches ? (
                      <p style={{ marginBottom: 0 }}>
                        Upload your very best photo to attract the best clients
                        to you
                      </p>
                    ) : (
                      <p>
                        Tuteria is a professional community of exceptional
                        tutors. Upload your very best photo to attract clients
                        to you.
                      </p>
                    )
                  }
                </Media>
              </MobileDiv>
              <ImageUpload
                uploaded={this.state.uploaded}
                image={this.state.image}
                handleOpenModal={this.handleOpenModal}
                updateImage={this.updateUploadedImage}
              />
              <ImageModal
                showModal={this.state.showModal}
                image={this.state.uploadedImage}
                updateImage={this.updateImage}
                handleCloseModal={this.handleCloseModal}
              />
              <Media query={`(max-width: ${xs}px)`}>
                {matches =>
                  matches ? null : (
                    <ImageNotice>
                      <h2>Here are quick tips for a great photo</h2>
                      <ul>
                        <li>
                          Make sure your picture is clear, sharp, and friendly.
                          It shouldn’t be blurry.
                        </li>
                        <li>
                          Don’t upload scanned passport, scanned PDF or framed
                          photos.
                        </li>
                        <li>
                          The background of your picture must look neat and
                          presentable.
                        </li>
                        <li>
                          Your picture size should not exceed 2MB. Check the
                          size before you upload.
                        </li>
                      </ul>
                    </ImageNotice>
                  )
                }
              </Media>
            </Column>
          </Column>
          <Column md={4}>
            <ResponsiveTooltip images={imgages} />
          </Column>
        </Content>
      </WizardWrapper>
    );
  }
}
const RTooltip = styled(Tooltip)`
  @media (min-width: ${xs}px) {
    width: 300px;
    & h3 {
      font-size: 17px;
      font-weight: 500;
      line-height: 22px;
      margin-bottom: 8px;
    }
    & ${Summary} {
      font-weight: 300;
      line-height: 20px;
    }
  }
  @media (max-width: ${xs}px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const ResponsiveTooltip = props => {
  return (
    <RTooltip
      icon="lightbulb-o"
      cover="Here are examples of what we call a professional tutor photo"
    >
      <Media query={`(max-width: ${xs}px)`}>
        {matches =>
          matches ? null : (
            <div>
              <h3>Here’s what we call a professional tutor photo</h3>
              <Summary>
                <span>
                  A good photo should look bright, have a charming smile and
                  keep your eye looking straight.
                </span>
                <br />
              </Summary>
            </div>
          )
        }
      </Media>
      <ImageOptions>
        {props.images.map((image, index) => (
          <img src={`${BASE_PATH}img/profile/${image}`} alt={image} />
        ))}
      </ImageOptions>
    </RTooltip>
  );
};
const MobileDiv = styled(Div)`
  @media (max-width: ${xs}px) {
    margin-bottom: 21px;
  }
  & h2 {
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 7px;
    & + p {
      margin-top: 0;
      margin-bottom: 0;
      width: 650px;
      @media (max-width: ${xs}px) {
        width: 100%;
      }
    }
  }
`;
export default connect(mapStateToProps)(TutorProfilePage);
