import React from "react";
import WordCounterComponent from "../compound/WordCounterComponent";
import TextArea from "../simple/TextArea";

const TextareaComponent = ({
  rows = 4,
  placeholder,
  customOnChange = () => {},
  ...rest
}) => {
  return (
    <WordCounterComponent {...rest}>
      {({ onChange, ...cProps }) => (
        <TextArea
          rows={rows}
          onChange={e => {
            onChange(e);
            customOnChange(e.target.value);
          }}
          placeholder={placeholder}
          {...cProps}
        />
      )}
    </WordCounterComponent>
  );
};
export default TextareaComponent;
