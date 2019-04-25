//@flow
import React from "react";
import styled from "styled-components";
import { Col as Column } from "react-grid-system";
import {
  SpecialColumn,
  DropdownComponent,
  InputComponent,
  Formset,
  xs
} from "./components";

const Column7030 = styled(SpecialColumn)`
  padding-left: 15px !important;
  padding-right: 15px !important;
  @media (max-width: ${xs}px) {
    /* padding-left: 0 !important;
    padding-right: 0 !important; */
  }
  & > div {
    &:first-child {
      @media (min-width: ${xs}px) {
        width: 70%;

        border-left: 0;
        border-right: 0;
      }
    }
    &:last-child {
      @media (min-width: ${xs}px) {
        width: 30%;
        border-right: 0;
      }
    }
  }
`;

const Div = styled.div`
  ${props => props.css};
`;

function generateFormsetComponentInstance(
  fields: Array<string>,
  type: string = "training"
) {
  const placeholders = {
    training: ["Building Space Rocket Essentials", "Elon Musk Inc"],
    award: []
  };
  const placeholder = placeholders[type];
  return (
    formset,
    GetValidationFunc,
    fetched,
    onAdd,
    errors,
    updateErrors,
    error = false
  ) => (
    <Formset
      error={error}
      key="formset-id-jewo"
      formset={formset}
      formId={({ name, company }) => name && company}
      heading={({ name }) => name}
      subtitle={({ company, year }) => `${company} | ${year}`}
      GetValidationFunc={GetValidationFunc}
      addText={`Add another ${type}`}
      fetched={fetched}
      updateParent={onAdd}
      errors={errors}
      updateErrors={updateErrors}
      stylings={`
        h3{
          color: #484848;
          font-size: 19px;
          margin-bottom: 10px;
        }
        hr{
        height: 0;
        margin-left: 0;
        margin-bottom: 27px;`}
      headingContent={
        <Column>
          <h3>{`Add your ${type}s`}</h3>
          <hr />
        </Column>
      }
    >
      {(
        state,
        updateField,
        { customErrorMessage, errorMessageForField, fieldHasError },
        error: boolean
      ) => (
        <Div>
          <InputComponent
            error={error || fieldHasError("name")}
            error_message={errorMessageForField("name")}
            updateText={text => updateField(text, "name")}
            label={fields[0]}
            placeholder={placeholder[0]}
          />
          <Column7030>
            <InputComponent
              noColumn
              error={error || fieldHasError("company")}
              error_message={errorMessageForField("company")}
              updateText={text => updateField(text, "company")}
              label={fields[1]}
              placeholder={placeholder[1]}
            />
            <DropdownComponent
              defaultText="Select Year"
              noColumn
              error={error || fieldHasError("company")}
              error_message={errorMessageForField("company")}
              label={`Year of ${type}`}
              onChange={value => {
                updateField(value, "year");
              }}
              value={state.country}
              options={[{ text: "1991", value: 1991 }]}
            />
          </Column7030>
        </Div>
      )}
    </Formset>
  );
}

export { generateFormsetComponentInstance as FormsetComponent };
