//@flow
import React from "react";
import styled, { css } from "styled-components";
import { Row, Col as Column } from "react-grid-system";
import {
  Icon,
  NumberIcon,
  PrimaryButton,
  Checkbox as CheckboxInput,
  InputFieldComponent,
  TextFieldComponent,
  SpecialColumn,
  xs,
  ApplicationTooltip,
  NoticeAction,
  Formset,
  FormComponent
} from "./components";
import Wrapper from "./Wrapper";
import { detailStateToProps as mapStateToProps } from "../reducers";
import { connect } from "react-redux";
import { getAcademicSubjectCategory, displayCurriculum } from "../utils";
import {
  InputComponent,
  FormsetComponent,
  RadioComponent,
  DropdownComponent,
  MultiselectComponent,
  TextareaComponent
} from "./question-types";
import {
  OverviewStateType,
  FormsetResultType,
  Props,
  LevelType
} from "../types";
import { getPrefix } from "../utils";
import { OVERVIEW_UPDATE_FIELD } from "../reducers";
import type { QuestionType } from "./question-types/types";
const CategoryTabList = styled.ul`
  display: flex;
  position: relative;
  list-style-type: none;
  flex-direction: column;
  width: 33.3%;
  margin: 0;
  padding: 0;
  background-color: #fbf9fb;
  flex-grow: 1;
  &:before {
    content: " ";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 21px 0 47px 1px;
    border-color: #dce0e0;
  }
  & li a {
    display: block;
    color: #484848;
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    padding: 15px 20px 15px 29px;
    text-transform: uppercase;
    border-right: 1px solid #dce0e0;
    cursor: pointer;

    & i,
    .icon-s {
      float: right;
      color: #ffab00;
    }

    &.active {
      background-color: #ffffff;
      border-bottom: 1px solid #dce0e0;
      border-right: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
  & li:not(:first-child) a.active {
    border-top: 1px solid #dce0e0;
    border-bottom: 1px solid #dce0e0;
  }
`;
const Note = styled(NoticeAction)`
  & h2 {
    background-color: transparent;
  }
  button.ind-items {
    & span {
      padding: 0;
    }
  }
`;
const Tooltip = styled(ApplicationTooltip)`
  &:before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 17px 21px 17px 0;
    border-color: transparent #f0f0f0 transparent transparent;
    top: 13.75%;
    left: -22px;
  }
  &:after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 16px 20px 16px 0;
    border-color: transparent #ffffff transparent transparent;
    top: 14%;
    left: -20px;
  }
`;
const CategoryTabsContent = styled.div``;
const CategoryParent = styled.div`
  display: flex;
  border: 1px solid #dce0e0;
  & ${CategoryTabList} {
    flex-grow: 1;
    width: inherit !important;
  }
  & ${CategoryTabsContent} {
    flex-grow: 3;
    padding: 17px 40px;
  }
`;

const NewFormComponent = props => (
  <FormComponent labelStyle={{ fontWeight: 500 }} {...props} />
);
class CategoryTab extends React.Component {
  handleTabClick = e => {
    e.preventDefault();
    this.props.onClick(this.props.tabIndex);
  };
  render() {
    return (
      <li>
        <a
          className={`"categories-list" ${this.props.isActive ? "active" : ""}`}
          onClick={this.handleTabClick}
        >
          {this.props.tabName}
          {this.props.isActive ? (
            <NumberIcon
              fontStyle="circle-thin"
              styling={`
                & span.fa-stack {
                  margin-top: -11px;
                  width: 17px;
                  height: 17px;
                  & .calendar-text, .fa-stack-1x{
                    color: #36B37E;
                  }
              }`}
              fontSize={9}
              icon="check"
            />
          ) : (
            <Icon style={{ fontSize: 17 }} name="plus" />
          )}
        </a>
      </li>
    );
  }
}
const Checkbox = ({ updateSelectedClasses, ...props }) => (
  <CheckboxInput
    innerColor="#36B37E"
    border="transparent"
    checkSize={`height: 20px; width: 20px;`}
    checkStyle={`left: 6px; top: 2px; width: 5px; height: 9px;`}
    textStyle={`color:#484848;font-size: 17px; padding-top: 0;`}
    onChange={() => {
      updateSelectedClasses(props.text);
    }}
    {...props}
  />
);

const Checkboxes = ({
  RootComponent = Column,
  items,
  selectedClasses,
  updateSelectedClasses,
  updateClasses
}) => {
  let groups = items
    .map((x, index) => (index % 3 === 0 ? items.slice(index, index + 3) : null))
    .filter(e => e);
  const isChecked =
    [...new Set(selectedClasses.filter(x => items.includes(x)))]
      .sort()
      .toString() === items.sort().toString();
  return (
    <FormComponent
      RootComponent={RootComponent}
      label="Select the classes you intend to teach:"
      labelStyle={{ marginBottom: 16 }}
    >
      <Div css={` display:flex; `}>
        {new Array(2).fill().map((group, ii) => {
          const allCheckbox = (
            <Checkbox
              text="All Classes"
              key="All  Classes"
              updateSelectedClasses={() => {
                const ttr =
                  [...new Set(selectedClasses.filter(x => items.includes(x)))]
                    .sort()
                    .toString() === items.sort().toString();
                let results = [];
                if (ttr) {
                  results = selectedClasses.filter(
                    x => items.includes(x) === false
                  );
                } else {
                  results = [...selectedClasses, ...items];
                }
                updateClasses(results);
              }}
              checked={isChecked}
            />
          );
          // debugger;
          const temp = groups[ii];
          let result = [];
          if (!!temp) {
            result = groups[ii].map(text => (
              <Checkbox
                text={text}
                key={text}
                updateSelectedClasses={updateSelectedClasses}
                checked={selectedClasses.indexOf(text) > -1}
              />
            ));
          }
          if (ii === 0) {
            result.push(allCheckbox);
          }
          return (
            <Div
              css={`
            display:flex; 
            flex: 1;
            flex-direction:column;`}
            >
              {result}
            </Div>
          );
        })}
      </Div>
    </FormComponent>
  );
};
class Categories extends React.Component {
  state = {
    currentIndex: 0
  };
  currentTabContent = index => {
    return (
      <Checkboxes
        items={this.props.items[index].values}
        selectedClasses={this.props.selectedClasses}
        updateClasses={this.props.updateClasses}
        updateSelectedClasses={this.props.updateSelectedClasses}
      />
    );
  };
  render() {
    return (
      <CategoryParent className="tabs">
        <CategoryTabList>
          {this.props.items.map((item, index) => (
            <CategoryTab
              key={item.name}
              tabName={item.name}
              isActive={this.state.currentIndex === index}
              onClick={() => {
                this.setState({ currentIndex: index });
              }}
            />
          ))}
        </CategoryTabList>
        <CategoryTabsContent>
          {this.currentTabContent(this.state.currentIndex)}
        </CategoryTabsContent>
      </CategoryParent>
    );
  }
}
const NoPaddingColumn = styled(Column)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const Div = styled.div`
  ${props => props.css};
`;

type FormsetType = {
  name: string,
  company: string,
  year: string
};

type State = {
  +loaded: boolean,
  +certifications: Array<FormsetType>,
  +displayCurriculum: boolean,
  +display_error: boolean,
  +fields: OverviewStateType,
  +errors: {
    title: boolean,
    description: boolean,
    certifications: boolean,
    selectedClasses: boolean,
    curriculums: boolean
  }
};
class OverviewPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: "",
        description: "",
        certifications: [],
        questions: {},
        curriculums: [],
        selectedClasses: []
      },
      displayCurriculum: false,
      dependants: {},
      display_error: false,
      errors: {
        certifications: false,
        title: true,
        description: true,
        curriculums: false,
        selectedClasses: false
      },
      addCertifications: false,
      loaded: false
    };
  }
  getComponentForQuestion = (
    question: QuestionType,
    index,
    depends,
    prefix = ""
  ) => {
    const { fields: { questions } } = this.state;
    const { subject } = this.props;
    const options = {
      YesNo: RadioComponent,
      SingleChoice: DropdownComponent,
      MultiChoice: MultiselectComponent,
      Text: InputComponent,
      Description: TextareaComponent
    };
    const id = question.id || index + 1;
    // const id = index + 1;
    const Component = options[question.type];
    let params = [
      {
        ...question,
        name: question.name
          .replace("[Skill]", subject.name)
          .replace("[skill]", subject.name)
          .replace("[Language]", subject.name)
          .replace("[Exam]", subject.name)
          .replace("[exam]", subject.name)
      }
    ];
    const prefId = getPrefix(prefix, id);
    // const prefId = `${prefix}-${id}`;
    let callback = [
      !!question.depended_on
        ? this.state.dependants[prefId]
        : questions[prefId],
      val => {
        let p = [val, prefId];
        if (!!depends) {
          p.push(getPrefix(prefix, depends.id));
        }
        this.updateQuestionAnswer(...p);
        if (!!question.depended_on) {
          this.setState({
            dependants: { ...this.state.dependants, [prefId]: val }
          });
        }
      }
    ];
    if (!!question.fields) {
      const answerWithFormset = questions[prefId] || {};
      params.push({
        formset: answerWithFormset.formset,
        GetValidationFunc: this.GetValidationFunc,
        fetched: this.state.loaded
      });
      callback = [
        answerWithFormset.answer,
        (val: FormsetResultType) => {
          const newLocal = state => {
            const fields = state.fields;
            return {
              ...state,
              fields: {
                ...state.fields,
                questions: {
                  ...fields.questions,
                  [prefId]: {
                    answer: val.question,
                    formset: val.formset
                  }
                }
              }
            };
          };

          this.setState(newLocal);
        }
      ];
    } else {
    }
    callback.push(this.toggleQuestionError(prefId));
    return Component(...params)(...callback);
  };
  toggleQuestionError = key => {
    const errors = this.props.allQuestionErrors(this.state.fields);
    return this.state.display_error && errors(key);
  };
  updateQuestionAnswer = (value, id, dependant) => {
    this.setState(state => {
      let fields = this.state.fields;
      let questions = { ...fields.questions, [id]: value };
      if (!!dependant && value !== "Yes") {
        questions[dependant] = [];
      }
      return { ...state, fields: { ...fields, questions } };
    });
  };
  GetValidationFunc = result => {
    return this.props.GetValidationFunc(result);
  };

  updateSelectedClasses = classLevel => {
    const { fields: { selectedClasses } } = this.state;
    let result = [];
    let index = selectedClasses.indexOf(classLevel);
    if (index > -1) {
      result = selectedClasses.filter(x => x !== classLevel);
    } else {
      result = [...new Set([...selectedClasses, classLevel])];
    }
    this.updateClasses(result);
  };

  updateClasses = (selectedClasses: Array<string>) => {
    const subjects = [...new Set(selectedClasses)];
    const levels = this.getCategoryLevels(subjects);
    let questions = this.state.fields.questions;
    const invalid = Object.keys(questions).filter(x => {
      let split = x.split("-")[0];
      return levels.includes(split);
    });
    invalid.forEach(x => {
      delete questions[x];
    });
    this.setState(state => ({
      ...state,
      fields: {
        ...state.fields,
        selectedClasses: subjects,
        questions
      },
      displayCurriculum: this.toggleCurriculumDisplay(subjects)
    }));
  };
  updateField = (
    field: string,
    text: string | Array<string>,
    isArray: boolean = false
  ) => {
    this.setState((state: State) => {
      let fields = { ...state.fields, [field]: text };
      const evaluation = isArray ? text.length == 0 : !!text === false;
      let errors = { ...state.errors, [field]: evaluation };
      return { ...state, fields, errors };
    });
  };

  getFormset = () => {
    return FormsetComponent([
      "Certificate Name",
      "Issuing Company Name",
      "Year obtained"
    ])(
      this.state.fields.certifications,
      this.GetValidationFunc,
      this.state.loaded,
      data =>
        this.setState({
          fields: { ...this.state.fields, certifications: data }
        }),
      this.state.errors.certifications,
      status =>
        this.setState({
          errors: {
            ...this.state.errors,
            certficiations: status
          }
        })
    );
  };
  getCategoryLevels = classes => {
    const { questions: { levelClassification } } = this.props;
    return levelClassification(classes);
  };
  academicClasses = levels2 => {
    return getAcademicSubjectCategory(levels2);
  };
  toggleCurriculumDisplay(selectedClasses: Array<string>) {
    return displayCurriculum(selectedClasses, this.props.questions);
  }
  componentDidMount() {
    const { data } = this.props;
    this.setState(state => {
      return {
        ...state,
        fields: data,
        displayCurriculum: this.toggleCurriculumDisplay(
          state.fields.selectedClasses
        )
      };
    });
  }
  generateQuestionComponent(questions, level, qq) {
    const dependant = questions
      .filter(x => !!x.depended_on)
      .map(x => ({ id: x.id, depends: x.depended_on }));

    return questions.map((x, index) => {
      if (!!x.depended_on) {
        let placeholder = getPrefix(level, index);
        if (qq[placeholder] !== "Yes") {
          return null;
        }
      }
      let depend2 = dependant.find(y => y.depends == x.id);
      return (
        <div key={index}>
          {this.getComponentForQuestion(x, index, depend2, level)}
        </div>
      );
    });
  }
  getQuestionForLevel = (level, ind, qq) => {
    const { questions: { levels, questions = [] } } = this.props;
    console.log(this.props);
    const selectedLevel = levels.find(x => x.name === level);
    const lQ = selectedLevel.questions || [];
    return (
      <div key={`${level}-ind`}>
        {this.generateQuestionComponent(lQ.concat(questions), level, qq)}
      </div>
    );
  };
  getQuestions = q => {
    const {
      questions: { levels, questions, subcategoryQuestions }
    } = this.props;
    if (!!levels) {
      return this.getCategoryLevels(this.state.fields.selectedClasses).map(
        (x, ind) => this.getQuestionForLevel(x, ind, q)
      );
    }
    let allQ = subcategoryQuestions.concat(questions);
    return this.generateQuestionComponent(allQ, null, q);
  };
  academicSubjectClassification = () => {
    const { questions: { levels = [] } } = this.props;
    const levels2 = levels.map(x => x.classes);
    const levelNames = levels.map(x => x.name);
    return this.academicClasses(levels2);
  };
  previousPage = () => {
    this.props.toSubjectListPage();
  };
  nextPage = () => {
    const { subject: { slug } } = this.props;
    this.props.navigateTo(slug, "pricing");
  };
  canSubmit = () => {
    const localErrors = [...new Set(Object.values(this.state.errors))];
    return (
      this.props.canSubmit(this.state.fields) &&
      localErrors.length === 1 &&
      localErrors[0] === false
    );
  };
  validateForm = () => {
    if (this.canSubmit()) {
      this.props.dispatch({
        type: OVERVIEW_UPDATE_FIELD,
        value: this.state.fields
      });
      this.nextPage();
    } else {
      this.setState({ display_error: true });
    }
  };

  displayError = (field: string) => {
    return this.state.display_error && this.state.errors[field];
  };
  render() {
    const { allQuestions, questions: { curriculum } } = this.props;
    const that = this;
    const rows = this.academicSubjectClassification();
    const lState = this.state.fields;
    const curriculumForm = MultiselectComponent({
      name: "What curriculum(s) can you teach?",
      options: curriculum
    })(
      this.state.fields.curriculums,
      curriculums => this.updateField("curriculums", curriculums, true),
      this.displayError("curriculums")
    );
    const { data } = this.props;
    return (
      <Wrapper
        step={1}
        nextPage={this.validateForm}
        previousPage={this.previousPage}
        disableNextScreen={!this.canSubmit()}
        {...this.props}
      >
        {({ width, position }) => {
          const toolTipStyle = {
            width: width,
            height: "auto",
            position: "absolute",
            marginLeft: position,
            top: 0
          };
          return (
            <div>
              <InputFieldComponent
                updateText={text => this.updateField("title", text)}
                value={data.title}
                error={this.displayError("title")}
                error_message="This field is required"
                maxValue={80}
                label="Subject headline"
                labelStyle={{ fontWeight: 500 }}
                tooltip={
                  <Tooltip
                    style={
                      toolTipStyle // error={this.state.display_error} // error_message={this.renderErrors(0)}
                    }
                    heading="Summarize your expertise in General Mathematics."
                  >
                    <span>
                      {` Please don't make any errors, only use alphabets and
                      numbers, avoid unnecessary punctuations and write in full,
                      NO ABBREVIATIONS.`}
                    </span>
                  </Tooltip>
                }
                placeholder="EXAMPLE: Experienced ICAN instructor with a personalized teaching approach"
              />
              {rows.length > 0 ? (
                <NewFormComponent
                  label={
                    rows.length > 1 && "What category can you teach?" // noColumn // RootComponent={rows.length > 1 ? NoPaddingColumn : Column}
                  }
                >
                  {rows.length === 1 ? (
                    <Checkboxes
                      RootComponent={NoPaddingColumn}
                      items={rows[0].values}
                      updateClasses={this.updateClasses}
                      selectedClasses={this.state.fields.selectedClasses}
                      updateSelectedClasses={this.updateSelectedClasses}
                    />
                  ) : (
                    <Categories
                      updateSelectedClasses={this.updateSelectedClasses}
                      selectedClasses={this.state.fields.selectedClasses}
                      updateClasses={this.updateClasses}
                      items={rows}
                    />
                  )}
                </NewFormComponent>
              ) : null}
              {this.state.displayCurriculum ? curriculumForm : null}

              {this.getQuestions(this.state.fields.questions)}

              <TextFieldComponent
                updateText={text => this.updateField("description", text)}
                value={data.description}
                error={this.displayError("description")}
                error_message="This field is required"
                maxValue={1800}
                label="Describe your experience & teaching style"
                labelStyle={{ fontWeight: 500 }}
                tooltip={
                  <Tooltip
                    style={
                      toolTipStyle // error={this.state.display_error} // error_message={this.renderErrors(1)}
                    }
                    heading="Summarize your expertise in General Mathematics."
                  >
                    <span>
                      {`Please don't make any errors, only use alphabets and
                    numbers, avoid unnecessary punctuations and write in full,
                    NO ABBREVIATIONS.`}
                    </span>
                  </Tooltip>
                }
                rows={5}
                placeholder="Why should clients hire you in particular? What makes you the best tutor for them?"
              />

              {!this.state.addCertifications ? (
                <Column>
                  <Note
                    style={{ marginTop: -10, marginBottom: 10 }}
                    bgColor="rgba(255,171,0,0.1)"
                    borderColor="#FFAB00"
                    buttonText=" Add Certifications/Awards"
                    onClick={() =>
                      this.setState({
                        addCertifications: true
                      })
                    }
                  >
                    <Icon name="bulb" />
                    <div className="notice">
                      <h2>Have Relevant Certifications/Awards?</h2>
                      <p>
                        Add more credibility by adding any relevant
                        certification or award you have.
                      </p>
                    </div>
                  </Note>
                </Column>
              ) : (
                this.getFormset()
              )}
            </div>
          );
        }}
      </Wrapper>
    );
  }
}
export default connect(mapStateToProps)(OverviewPage);
