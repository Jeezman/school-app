import React from "react";
import WordCounterComponent from "../compound/WordCounterComponent";
import Input from "../simple/Input";
const InputComponent = ({ placeholder, style = {}, defaultValue, ...rest }) => {
  return (
    <WordCounterComponent {...rest}>
      {cProps => (
        <Input
          type="text"
          style={style}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...cProps}
        />
      )}
    </WordCounterComponent>
  );
};
export { WordCounterComponent };
export default InputComponent;
