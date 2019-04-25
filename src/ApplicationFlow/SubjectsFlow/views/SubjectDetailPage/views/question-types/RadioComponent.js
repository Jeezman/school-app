//@flow
import React from "react";
import { FormsetComponent } from "./FormsetComponent";
import { RadioComponent, defaultErrorMessage } from "./components";

import type { QuestionType } from "./types";
type FormsetType = {
  +name: string,
  +company: string,
  +year: string
};
type WrapperStateType = {
  +display: boolean,
  +fields: {
    +question: string,
    +formset: Array<FormsetType>
  },
  +errors: boolean
};
type WrapperPropsType = {
  +question: QuestionType,
  +formset: Array<FormsetType>,
  +value: string,
  +fetched: boolean,
  +GetValidationFunc: Function,
  +onChange: Function,
  +isChecked: Function,
  +options: Array<string>,
  +type: string,
  +error: boolean
};

class ToggleFormsetWrapper extends React.Component<
  WrapperPropsType,
  WrapperStateType
> {
  state = {
    display: false,
    fields: {
      question: "",
      formset: []
    },
    errors: false
  };
  isChecked = val => {
    const isChecked = this.props.isChecked(val);
    const question = this.state.fields.question;
    const parentChecked = question === val;
    return isChecked || parentChecked;
  };
  updateLocalState(props: WrapperPropsType) {
    const { value, formset } = props;
    this.setState({
      fields: {
        question: value,
        formset
      }
    });
  }
  componentDidMount() {
    this.updateLocalState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    const newState = {
      value: nextProps.value,
      formset: nextProps.formset
    };
    if (JSON.stringify(this.state.fields) !== JSON.stringify(newState)) {
      this.updateLocalState(nextProps);
    }
  }
  onChange = (value: string, checked: boolean) => {
    const newLocal = state => {
      let display = false;
      if (value === "Yes") {
        display = true;
      }
      let fields = { ...state.fields, question: value };
      this.props.onChange(fields);
      return { ...state, display, fields };
    };

    this.setState(newLocal);
  };
  updateParent = formset => {
    const func = state => {
      let fields = { ...state.fields, formset };
      this.props.onChange(fields);
      return { ...state, fields };
    };

    this.setState(func);
  };
  render() {
    const { question, options, type, error, ...rest } = this.props;

    return (
      <div>
        <RadioComponent
          label={question.name}
          options={options}
          name={question.name}
          value={this.state.fields.question}
          onChange={this.onChange}
          error={error}
          error_message={defaultErrorMessage}
          isChecked={this.isChecked}
        />
        {this.state.display
          ? FormsetComponent(question.fields, type)(
              rest.formset,
              rest.GetValidationFunc,
              rest.fetched,
              this.updateParent,
              this.state.errors,
              (status: boolean) => {
                this.setState({ errors: status });
              },
              error
            )
          : null}
      </div>
    );
  }
}

function generateQuestionComponentInstance(question: QuestionType, remaining) {
  let options = ["Yes", "No"];
  if (!!question.extra) {
    options = options.concat(question.extra);
  }
  const int2 = Math.floor(Math.random() * 2);
  return (
    value: string,
    onChange: Function,
    display_error: boolean = false
  ) => {
    if (!!question.fields) {
      return (
        <ToggleFormsetWrapper
          question={question}
          options={options}
          onChange={onChange}
          type="training"
          isChecked={val => val === value}
          value={value}
          error={display_error}
          {...remaining}
        />
      );
    }
    return (
      <RadioComponent
        label={question.name}
        options={options}
        value={value}
        name={`${question.name} ${int2}`}
        onChange={onChange}
        error={display_error}
        error_message={defaultErrorMessage}
        isChecked={val => val === value}
      />
    );
  };
}
export { generateQuestionComponentInstance as RadioComponent };
