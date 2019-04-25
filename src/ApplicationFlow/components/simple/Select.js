import React from "react";
import { Wrapper, Button, Menu, MenuItem } from "react-aria-menubutton";
import styled, { css } from "styled-components";
import globals from "../../siteStyle";

import { Col as Column } from "react-grid-system";
const { formComponentBase, formTextPaddingLeft, siteColor } = globals;

export const borderColor = (props, state) => {
  const options = {
    focus: {
      disabled: "none",
      def: `1px solid ${siteColor}`,
      error: `1px solid ${siteColor}`
    },
    hover: {
      disabled: "none",
      def: `1px solid #B2B2B2`,
      error: `1px solid #B2B2B2`
    },
    raw: {
      disabled: "",
      def: "1px solid #CACACA",
      error: "2px solid #E9411B"
    }
  };
  if (state) {
    let value = options[state];
    if (props.disabled) {
      return value.disabled;
    }
    if (props.error) {
      return value.error;
    }
    return value.def;
  }
};

export const SelectHoverFocus = css`
  &:focus {
    outline: none;
    border: ${props => borderColor(props, "focus")};
  }
  &:hover {
    border: ${props => borderColor(props, "hover")};
    background-color: #f6f6f6;
  }
  &:active,
  &:visited {
    background-color: ${props => (props.disabled ? "#F6F6F6" : "#E3EDF8")};
    color: ${props => (props.disabled ? "inherit" : "#0064E6")};
  }
`;

export const StyledWrapper = styled(Wrapper)`
  width: ${props => (props.width ? props.width : 100)}%;
  ${formComponentBase} border: none;
  line-height: 18px;
  height: 44px;
  margin-left: ${props => (props.first ? 14 : 0)}px;
  position: relative;

  background-color: ${props => (props.disabled ? "#F6F6F6" : "#FFF")};
`;
export const StyledButton = styled(Button)`
  display: inline-block;
  padding: 12px ${formTextPaddingLeft}px;
  border: ${props => borderColor(props, "raw")};
  width: 100%;
  cursor: pointer;
  position: relative;
  ${SelectHoverFocus} background-color: ${props =>
      props.disabled ? "#F6F6F6" : "inherit"};

  & i {
    font-size: 10px;
    top: 0;
    margin-top: 16px;
    position: absolute;
    right: 0;
    margin-right: 15px;
  }
`;
export const UlStyle = css`
  background: #fff;
  border: 1px solid #dce0e0;
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 99;
  padding-left: 0;
  border-radius: 2px;
  margin: 7px 0 0 0;
  width: calc(100%);
  box-shadow: 0 4px 6px 0 rgba(170, 170, 170, 0.21);
  & li:first-of-type {
    border-radius: 1px 1px 0 0;
    margin-top: 8px;
  }
  max-height: 300px;
  overflow-y: auto;
`;
export const StyledMenu = styled(Menu)`
  ${formComponentBase} border-width: 0;
  & ul {
    ${UlStyle};
  }
`;
export const LiStyle = css`
  cursor: pointer;
  padding-top: 11px;
  border-bottom: 1px solid #eee;
  padding-bottom: 11px;
  padding-left: 18px;
  &:hover,
  &:focus {
    background-color: #ebf4fd;
  }
`;
export const StyledMenuItem = styled(MenuItem)`
  ${LiStyle};
`;

// export class Select extends React.Component {
//   state = {
//     isOpen: false,
//     text: ""
//   };
//   updateOpenState = (value, event) => {
//     const { getText = x => x, onChange } = this.props;
//     onChange(value);

//     this.setState({ isOpen: false, text: getText(value) });
//   };
//   componentDidMount() {
//     this.setState({ text: this.getDefaultText(this.props) });
//   }
//   getDefaultText = props => {
//     const { children, value } = props;
//     let firstChild = children.length ? children[0] : children;
//     let newValue = value || getProps(firstChild);
//     return newValue;
//   };
//   // componentWillReceiveProps(nextProps) {
//   //   this.setState({ text: this.getDefaultText(nextProps) });
//   // }
//   handleKeyDown = event => {
//     if (event.key !== "Enter" && event.key !== " ") return;
//     debugger;
//     event.preventDefault();
//     this.updateOpenState(event);
//   };
//   render() {
//     const {
//       onChange = () => {},
//       disabled = false,
//       value,
//       md = 12,
//       sm,
//       xs,
//       children,
//       error = false,
//       noColumn = false,
//       SelectMenu = StyledMenu,
//       ...rest
//     } = this.props;
//     // let firstChild = children.length ? children[0] : children;
//     // let newValue = value || getProps(firstChild)
//     const newChildren = children;
//     // const newChildren = React.Children.map(children, child => {
//     //   return React.cloneElement(child, {
//     //     onClick: () => {
//     //       this.updateOpenState(child);
//     //     },
//     //   });
//     // });
//     const result = (
//       <StyledWrapper
//         disabled={disabled}
//         onSelection={this.updateOpenState}
//         onMenuToggle={({ isOpen }) => {
//           this.setState({ isOpen });
//         }}
//         closeOnSelection={true}
//         {...rest}
//       >
//         <StyledButton
//           error={error}
//           disabled={disabled}
//           aria-disabled={disabled}
//           tabIndex={disabled ? -1 : 0}
//         >
//           {this.state.text}
//           <i
//             className={`fa fa-chevron-${this.state.isOpen ? "up" : "down"}`}
//             aria-hidden="true"
//           />

//           <SelectMenu>
//             <ul id="style-1">{newChildren}</ul>
//           </SelectMenu>
//         </StyledButton>
//       </StyledWrapper>
//     );
//     return noColumn ? (
//       result
//     ) : (
//       <Column md={md} sm={sm} xs={xs}>
//         {result}
//       </Column>
//     );
//   }
// }

export const Option = ({ value, ...rest }) => {
  const text = typeof rest.children === "string" ? rest.children : rest.text;
  return <StyledMenuItem tag="li" value={value} text={text} {...rest} />;
};

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.value || "",
      isOpen: false
    };
  }

  handleSelection(value) {
    const { getText = x => x, onChange } = this.props;
    onChange(value);
    this.setState({ selected: getText(value) });
  }
  displayFunc = () => {
    const {
      output = e => e,
      defaultText = "Select",
      uncontrolled = false
    } = this.props;
    const displayVal = uncontrolled ? this.props.value : this.state.selected;
    return output(displayVal) || defaultText;
  };
  render() {
    const {
      disabled = false,
      value,
      md = 12,
      sm,
      xs,
      children,
      error = false,
      noColumn = false,
      SelectMenu = StyledMenu,
      ...rest
    } = this.props;
    const result = (
      <StyledWrapper
        disabled={disabled}
        onMenuToggle={({ isOpen }) => {
          this.setState({ isOpen });
        }}
        onSelection={this.handleSelection.bind(this)}
        {...rest}
      >
        <StyledButton
          error={error}
          disabled={disabled}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          {this.displayFunc()}
          <i
            className={`fa fa-chevron-${this.state.isOpen ? "up" : "down"}`}
            aria-hidden="true"
          />
        </StyledButton>
        <SelectMenu>
          <ul id="style-1">{children}</ul>
        </SelectMenu>
      </StyledWrapper>
    );
    return noColumn ? (
      result
    ) : (
      <Column md={md} sm={sm} xs={xs}>
        {result}
      </Column>
    );
  }
}
