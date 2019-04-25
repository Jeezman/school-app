import React from "react";
import styled from "styled-components";

const styles = {
  form: "navbar-form navbar-left",
  div: "input-group top-search",
  input: "gui-input form-control",
  span: "input-group-btn",
  button: "btn",
  i: "glyphicon glyphicon-search"
};
const Form = styled.form`
  & span.input-group-btn:first-child {
    width: 0px;
  }
`;
const NavSearchForm = () => (
  <Form
    action="/explore/"
    id=""
    className={styles.form}
    method="get"
    name="search-form"
  >
    <div className={styles.div}>
      <input
        type="text"
        id="nav-skill-input"
        required="true"
        name="query"
        className={styles.input}
        placeholder="What do you want to learn?"
      />
      <input type="hidden" name="region" value="" />
      <span className={styles.span} />
      <span className={styles.span}>
        <button className={styles.button} type="submit">
          <i className={styles.i} />
        </button>
      </span>
    </div>
  </Form>
);
export default NavSearchForm;
