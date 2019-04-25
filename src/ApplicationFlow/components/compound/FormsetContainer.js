import React from "react";
import styled, { css } from "styled-components";
import globals from "../../siteStyle";
import { SuccessButton, DefaultButton } from "../simple/Button";
import { Col as Column } from "react-grid-system";
import Icon from "../../components/simple/Icon";

import Media from "react-media";
const { siteText, xs } = globals;

const textFont = "17px";
const leadingColor = "#0064e6";

export const BoardWrap = styled.div`
  height: 80px;
  border: ${props =>
    props.expForm ? "1px solid transparent" : "1px solid #94bdf2"};
  border-radius: 2px;
  background-color: #f7f9fa;
  display: flex;
  justify-content: ${props => props.expForm || "space-between"};

  align-items: center;
  margin-bottom: 24px;
  padding: ${props => (props.expForm ? "" : "11px 23px")};

  & .board-drag {
    color: #96bded;
    margin-right: ${props => (props.expForm ? "16px" : "")};
  }

  & .board-details__wrap {
    width: 70%;
    display: flex;
    flex-direction: column;

    & .board-details {
      font-size: ${textFont};
      font-weight: bold;
      line-height: 21px;
    }

    & .board-details:first-child {
      color: ${leadingColor};
    }
  }

  & .board-icons {
    color: ${leadingColor};
    width: 15%;
    display: flex;
    justify-content: space-between;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const EditFormWrap = styled.div`
  border: 1px solid #94bdf2;
  padding: 27px 36px;
  background-color: #f7f9fa;
  border-radius: 2px;
  margin-bottom: 24px;

  @media (max-width: ${xs}px) {
    padding: 19px 5px;
    background: #fff;
    border: 1px solid #cfe0f6;
    border-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const DragIcon = () => (
  <Media query={`(max-width: ${xs}px)`}>
    {matches =>
      matches ? null : (
        <div className="board-drag">
          <i className="fa fa-arrows-v fa-2x" />
        </div>
      )
    }
  </Media>
);
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 44px 15px 0;
  width: 48%;

  @media (max-width: ${xs}px) {
    width: 92.5%;
    flex-direction: column;

    & .inner-wrap {
      justify-content: space-between;
      display: flex;
    }
  }
`;

const EditableFormContainer = ({
  heading,
  subtitle,
  handleEdit,
  handleDelete,
  children,
  isOpen = false
}) => (
  <EditFormWrap>
    <BoardWrap expForm={isOpen} style={{ marginBottom: "24px" }}>
      <DragIcon />
      <div className="board-details__wrap">
        <span className="board-details">{heading}</span>
        <span className="board-details">
          <b>{subtitle}</b>
        </span>
      </div>

      <div className="board-icons">
        <span>
          <i onClick={handleEdit} className="fa fa-pencil fa-lg" />
        </span>
        <span className="board-icons--delete">
          <i onClick={handleDelete} className="fa fa-trash fa-lg" />
        </span>
      </div>
    </BoardWrap>
    {children}
  </EditFormWrap>
);

class QualificationComponent extends React.Component {
  state = {
    isOpen: false
  };
  handleEdit = () => {
    this.setState({ isOpen: true });
    this.props.onEditItem(true);
  };
  onDelete = e => {
    this.props.onDeleteClick(this.props.formId, this.props.formType);
  };
  handleSubmit = e => {
    e.preventDefault();
    const { isValid, successAction, isNotValid } = this.props;
    if (isValid()) {
      successAction(undefined, true);
      this.closeEdit();
    } else {
      isNotValid();
    }
  };
  closeEdit = () => {
    this.props.cancelAction();
    this.setState({ isOpen: false });
  };
  render() {
    const {
      formId,
      children,
      heading,
      subtitle,
      shouldHide,
      RootComponent = Column
    } = this.props;
    const DisplayHidden = shouldHide ? null : <div>{children}</div>;
    return !!formId === false ? (
      DisplayHidden
    ) : (
      <RootComponent>
        {this.state.isOpen ? (
          <EditableFormContainer
            isOpen={this.state.isOpen}
            heading={heading}
            subtitle={subtitle}
          >
            {DisplayHidden}
            <ButtonWrap>
              <SuccessButton onClick={this.handleSubmit} bgColor="#36B37E">
                Save Changes
              </SuccessButton>
              <DefaultButton onClick={this.closeEdit}>Cancel</DefaultButton>
            </ButtonWrap>
          </EditableFormContainer>
        ) : (
          <div>
            {formId && (
              <BoardWrap>
                <div className="board-drag">
                  <i className="fa fa-arrows-v fa-2x" />
                </div>
                <div className="board-details__wrap">
                  <span className="board-details">{heading}</span>
                  <span className="board-details">{subtitle}</span>
                </div>
                <div className="board-icons">
                  <span>
                    <i
                      onClick={this.handleEdit}
                      className="fa fa-pencil fa-lg"
                    />
                  </span>
                  <span>
                    <i onClick={this.onDelete} className="fa fa-trash fa-lg" />
                  </span>
                </div>
              </BoardWrap>
            )}
          </div>
        )}
      </RootComponent>
    );
  }
}

export const IconStyle = styled.div`
  cursor: pointer;
  margin-bottom: 40px;
  ${siteText} font-size: 17px;
  line-height: 22px;
  color: #0064e6;
  display: inline-block;
  & > i {
    font-size: 21px;
    margin-right: 8.5px;
  }
`;
export const AddIcon = ({ text, onClick }) => (
  <IconStyle onClick={onClick}>
    <Icon name="plus" /> {text}
  </IconStyle>
);
class GenericContainer extends React.Component {
  state = {
    data: {},
    display_error: false
  };
  componentDidMount() {
    this.updateClassState(this.props);
  }
  displayError = () => {
    this.setState(state => ({ ...state, display_error: true }));
  };
  updateClassState(props) {
    if (Object.keys(props.state).length > -1) {
      this.setState(state => ({ ...state, data: props.state }));
    }
    this.updateErrorState(props);
  }
  updateErrorState(props) {
    const { formType, display_errors } = props;
    this.setState(state => ({
      ...state,
      display_error: display_errors[formType]
    }));
  }
  componentWillReceiveProps(nextProps) {
    this.updateErrorState(nextProps);
  }

  handleSubmitEditedForm = (state, updateParent = false) => {
    const { submitEditedForm, index, formType } = this.props;
    let newState = state || this.state.data;
    submitEditedForm(newState, index, formType, updateParent);
  };

  cancelUpdate = () => {
    const { onEditQualification, index, formType } = this.props;
    console.log(index);
    console.log(formType);
    onEditQualification(false, index, formType);
  };
  onOpen = status => {
    const { onEditQualification, index, formType } = this.props;
    console.log(index);
    console.log(formType);
    onEditQualification(status, index, formType);
  };
  onDelete = e => {
    const { onDeleteClick, index, formType } = this.props;
    onDeleteClick(index, formType);
  };

  updateField = (value, key) => {
    const { currentIndex } = this.props;
    this.setState(state => {
      let data = { ...state.data, [key]: value };
      if (!!currentIndex === false) {
        this.handleSubmitEditedForm(data);
      }
      return { ...state, data };
    });
  };
  fieldHasError = func => {
    const newFunc = field => func(this.state.display_error, field);
    return newFunc;
  };
  validateData = () => {
    const { validationFunc, formType } = this.props;
    const { errorMessages } = validationFunc(this.state.data, formType);
    let result = Object.keys(errorMessages).length === 0;
    return result;
  };

  validationHelpers = () => {
    const { validationFunc, formType } = this.props;
    const { fieldHasError, ...rest } = validationFunc(
      this.state.data,
      formType
    );
    return {
      ...rest,
      fieldHasError: this.fieldHasError(fieldHasError)
    };
  };

  render() {
    const {
      formType,
      shouldHide,
      formId,
      heading,
      subtitle,
      RootComponent = Column
    } = this.props;

    return (
      <QualificationComponent
        shouldHide={shouldHide}
        formType={formType}
        formId={formId}
        heading={heading}
        subtitle={subtitle}
        successAction={this.handleSubmitEditedForm}
        cancelAction={this.cancelUpdate}
        onEditItem={this.onOpen}
        onDeleteClick={this.onDelete}
        isValid={this.validateData}
        isNotValid={this.displayError}
        RootComponent={RootComponent}
      >
        {this.props.render(
          this.state.data,
          this.updateField,
          this.validationHelpers()
        )}
      </QualificationComponent>
    );
  }
}
export const Divider = styled.hr`
  margin-bottom: 46px;
`;

class Formset extends React.Component {
  state = { formset: [], errors: false, raw: [], currentId: "" };
  componentDidMount() {
    this._addForm(this.props.formset, this.props.errors);
  }
  componentWillReceiveProps(nexProps) {
    if (this.props.errors !== nexProps.errors) {
      this.setState({ errors: nexProps.errors });
    }
    if (this.props.fetched !== nexProps.fetched) {
      this.setState({ formset: nexProps.formset });
    }
  }
  _addForm = (newValue, errors = false) => {
    this.setState(state => {
      const value = newValue || state.raw;
      if (value.length < 2) {
        value.push({});
      }
      this.props.updateParent(value);
      return { ...state, formset: value, raw: value, errors };
    });
  };
  validateSingleForm(qualification = {}) {
    const { errorMessages } = this.props.GetValidationFunc(qualification);
    return Object.keys(errorMessages).length === 0;
  }
  onEditForm = (status, index) => {
    this.setState(state => {
      let newIndex = "";
      if (status) {
        newIndex = index;
      }
      return { ...state, currentId: newIndex };
    });
  };
  deleteForm = index => {
    const key = "formset";
    this.setState(state => ({
      ...state,
      [key]: this.state[key].filter((x, ind) => index !== ind)
    }));
    this.onEditForm(false, null);
  };
  addNewForm = newValue => {
    if (this.validateSingleForm(this.state.raw[0])) {
      this._addForm(newValue);
    } else {
      this.toggleError();
    }
  };
  updateForm = (data, index, key, updateParent) => {
    this.setState(state => {
      const oldState = state.raw.map((x, i) => {
        if (i === index) {
          x = { ...x, ...data };
        }
        return x;
      });
      if (updateParent) {
        return { ...state, raw: oldState, formset: oldState };
      }
      this.props.updateParent(oldState, updateParent);
      return { ...state, raw: oldState };
    });
  };
  toggleError = () => {
    this.props.updateErrors(true);
    this.setState({ errors: true });
  };
  render() {
    const {
      formId,
      heading,
      subtitle,
      GetValidationFunc,
      addText = "Add Another",
      RootComponent = Column,
      stylings = "",
      error = false
    } = this.props;
    return (
      <Div
        css={css`
          ${stylings};
        `}
      >
        {this.props.headingContent}
        {this.state.formset.map((work, index) => (
          <GenericContainer
            index={index}
            key={"work" + index}
            onDeleteClick={this.deleteForm}
            validationFunc={GetValidationFunc}
            onEditQualification={this.onEditForm}
            submitEditedForm={this.updateForm}
            display_errors={{ formset: this.state.errors }}
            shouldHide={
              !!this.state.currentId === true && this.state.currentId !== index
            }
            currentIndex={this.state.currentId}
            formType="formset"
            formId={formId(work)}
            heading={heading(work)}
            subtitle={subtitle(work)}
            state={work}
            render={(state, updateField, extras) =>
              this.props.children(state, updateField, extras, error)
            }
            RootComponent={RootComponent}
          />
        ))}
        {this.state.formset.length < 2 ? (
          <RootComponent>
            <AddIcon onClick={() => this.addNewForm()} text={addText} />
            {this.props.showDivider ? <Divider /> : null}
          </RootComponent>
        ) : null}
      </Div>
    );
  }
}
const Div = styled.div`
  ${props => props.css};
`;
export default Formset;
