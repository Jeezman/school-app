import React from "react";
import FormGroup from "./FormGroup";
import styled from "styled-components";
import ErrorBlock from "./ErrorBlock";
export const Label = styled.label`
  color: #666666;
  font-family: "Circular Book";
  font-size: 17px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 9px;
`;
const FormComponent = ({
  noColumn = false,
  success = false,
  showIcon = false,
  error = false,
  LabelRightNode,
  label,
  children,
  error_message,
  className = "",
  errorMarginTop = 10,
  labelStyle = {},
  ...rest
}) => {
  let attributes = {
    error,
    success,
    showIcon,
    className,
    ...rest
  };
  if (noColumn) {
    attributes = { ...attributes, noColumn };
  }
  const LabelSection = LabelRightNode ? (
    [
      <Label key="label**" style={{ ...labelStyle, display: "inline-block" }}>
        {label}
      </Label>,
      <LabelRightNode key="hwes" />
    ]
  ) : (
    <Label key="label**" style={{ ...labelStyle, display: "inline-block" }}>
      {label}
    </Label>
  );

  return (
    <FormGroup {...attributes}>
      {LabelSection}
      {children}
      {error ? (
        <ErrorBlock style={{ marginTop: errorMarginTop }}>
          {error_message}
        </ErrorBlock>
      ) : null}
    </FormGroup>
  );
};

export default FormComponent;
