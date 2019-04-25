import React from "react";
import { MultiselectComponent, defaultErrorMessage } from "./components";
import type { QuestionType } from "./types";
function generateQuestionComponentInstance(
  question: QuestionType,
  type = "row"
) {
  const { options, extra = {} } = question;
  const { direction = type, levelDisplay = "" } = extra;
  return (
    value: Array<string>,
    onChange: Function,
    display_error: boolean = false
  ) => {
    return (
      <MultiselectComponent
        label={`${question.name} ${levelDisplay}`}
        options={options}
        name={`${question.name} ${levelDisplay}`}
        onChange={onChange}
        value={value}
        error={display_error}
        error_message={defaultErrorMessage}
        direction={direction}
      />
    );
  };
}

export { generateQuestionComponentInstance as MultiselectComponent };
