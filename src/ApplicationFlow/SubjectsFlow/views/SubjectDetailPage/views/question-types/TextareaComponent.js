import React from "react";
import { TextareaComponent, defaultErrorMessage } from "./components";
import type { QuestionType } from "./types";
function generateQuestionComponentInstance(question: QuestionType) {
  return (
    value: Array<string>,
    onChange: Function,
    display_error: boolean = false
  ) => {
    return (
      <TextareaComponent
        label={question.name}
        {...question.extra}
        error={display_error}
        error_message={defaultErrorMessage}
        onChange={e => {
          if (!!e.target === false) {
            onChange(e);
          }
        }}
        value={value}
      />
    );
  };
}

export { generateQuestionComponentInstance as TextareaComponent };
