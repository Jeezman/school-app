import React from "react";
import { Select, Option } from "../simple/Select";
import FormComponent from "../simple/FormComponent";

const DropdownComponent = ({
  value,
  defaultText = "Select",
  onChange,
  options = [],
  ...rest
}) => {
  return (
    <FormComponent {...rest}>
      <Select
        defaultText={defaultText}
        className="select"
        noColumn
        value={value}
        onChange={onChange}
        output={result => {
          const finder = options.find(
            x => x.value.toString() === result.toString()
          );
          return !!finder ? finder.text : finder;
        }}
      >
        <Option value="">{defaultText}</Option>
        {options.map((option, index) => (
          <Option value={option.value}>{option.text}</Option>
        ))}
      </Select>
    </FormComponent>
  );
};

export default DropdownComponent;
