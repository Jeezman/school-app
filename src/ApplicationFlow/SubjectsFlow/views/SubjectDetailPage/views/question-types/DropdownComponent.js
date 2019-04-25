//@flow
import React from "react";
import { DropdownComponent, defaultErrorMessage } from "./components";
import type { QuestionType } from "./types";
function range(start = 0, end) {
  return Array.from(new Array(end), (x, i) => i + start);
}

function generateQuestionComponentInstance(question: QuestionType, remaining) {
  let defaultText = question.options[0];
  let options = range(1, question.options[1])
    .concat([`${question.options[1]}+`])
    .map(x => ({
      text: `${x} ${question.options[2]}${x !== 1 ? "s" : ""}`,
      value: x
    }));

  return (
    value: string,
    onChange: Function,
    display_error: boolean = false
  ) => {
    return (
      <DropdownComponent
        label={question.name}
        options={options}
        defaultText={defaultText}
        value={value}
        name={question.name}
        onChange={onChange}
        error_message={defaultErrorMessage}
        error={display_error}
      />
    );
  };
}
export { generateQuestionComponentInstance as DropdownComponent };
