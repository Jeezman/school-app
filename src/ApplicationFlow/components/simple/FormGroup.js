import React, { Children, Component } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { Popover } from "./Popover";
import { Col as Column } from "react-grid-system";

function getColor(props) {
  if (props.error) {
    return "#E9411B";
  }
  if (props.success) {
    return "#36B37E";
  }
  return "inherit";
}
const FormGroup = styled.div`
  margin-bottom: 24px;
  position: relative;
  & label {
    display: block;
  }
  & input + i,
  * div + i {
    position: absolute;
    right: 0;
    margin-top: 0px;
    top: 43px;
    color: ${props => getColor(props)};
  }
  & div + i {
    right: 9px;
  }
  & ${Popover} {
  }
`;
class NewFormGroup extends Component {
  constructor(props) {
    super(props);
    this.node = null;
    this.state = {
      open: false
    };
  }
  focus() {
    this.setState({ open: true });
  }
  blur() {
    this.setState({ open: false });
  }

  render() {
    const {
      error = false,
      popover,
      success = false,
      children,
      noColumn = false,
      showIcon = true,
      RootComponent = Column,
      ...rest
    } = this.props;
    let children2 = children;
    if (children.length) {
      children2 = children.filter(x => x);
      children2 = Children.map(
        children2,
        child => (child ? React.cloneElement(child, { error, success }) : child)
      );
    } else {
      children2 = React.cloneElement(children, { error, success });
    }
    // children2 = Children.map(children2, child => {
    //   let props = {};
    //   if (Object.values(child.props).indexOf("text") > -1) {
    //     const newFocus = () => {
    //       this.setState({ open: true });
    //     };
    //     const newBlur = () => {
    //       this.setState({ open: false });
    //     };
    //     if (popover) {
    //       props.onFocus = newFocus;
    //       props.onBlur = newBlur;
    //     }
    //   }
    //   return React.cloneElement(child, props);
    // });
    const newChildren = (
      <div style={{ position: "relative" }}>
        {children2}
        {error && showIcon ? <Icon name="info-circle" /> : null}
        {success && showIcon ? <Icon name="check-circle" /> : null}
      </div>
    );
    const renderComponent = (
      <FormGroup
        ref={input => (this.node = input)}
        error={error}
        success={success}
        {...rest}
      >
        {newChildren}
        {/* <Overlay
    show={this.state.open}
    onHide={() => this.setState({ open: false })}
    placement={popoverDirection}
    container={this}
    target={() => ReactDOM.findDOMNode(this.node)}
  >
    {popover}
  </Overlay> */}
      </FormGroup>
    );
    return noColumn ? (
      renderComponent
    ) : (
      <RootComponent {...rest}>{renderComponent}</RootComponent>
    );
  }
}
export default NewFormGroup;
