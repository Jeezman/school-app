import React from "react";
import styled from "styled-components";
import Downshift from "downshift";
import Input from "./Input";
import { UlStyle, LiStyle } from "./Select";

const StyledMenu = styled.ul`
  ${UlStyle};
`;
const StyledMenuItem = styled.li`
  ${LiStyle};
`;
class TypeAhead extends React.Component {
  state = {
    inputValue: ""
  };
  updateState = props => {
    this.setState({ inputValue: props.value });
  };
  componentDidMount() {
    this.updateState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.updateState(nextProps);
    }
  }
  render() {
    const { onSelect = () => {}, autoFocus = false } = this.props;
    const onClear = () => {
      this.setState({ inputValue: "" });
    };
    return (
      <div>
        <Downshift
          onStateChange={param => {
            param.inputValue && this.setState({ inputValue: param.inputValue });
            this.props.onChange(param.inputValue);
            onSelect(param, onClear);
          }}
          selectedItem={this.state.inputValue}
          onChange={this.props.onChange}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem
          }) => {
            const filteredItems = this.props.items.filter(
              i =>
                !inputValue ||
                i.toLowerCase().includes(inputValue.toLowerCase())
            );
            return (
              <div>
                <Input
                  placeholder={this.props.placeholder}
                  autoFocus={autoFocus}
                  {...getInputProps()}
                />
                {isOpen ? (
                  <StyledMenu
                    id="style-1"
                    style={{
                      display:
                        filteredItems.length > 0 && inputValue.trim().length > 0
                          ? ""
                          : "none"
                    }}
                  >
                    {filteredItems.map((item, index) => (
                      <StyledMenuItem
                        {...getItemProps({
                          key: item,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? "lightgray"
                                : "white",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal"
                          }
                        })}
                      >
                        {item}
                      </StyledMenuItem>
                    ))}
                  </StyledMenu>
                ) : null}
              </div>
            );
          }}
        </Downshift>
      </div>
    );
  }
}

export default TypeAhead;
/*
<StyledMenu>
  <ul id="style-1">
    {items
      .filter(i => !inputValue || i.includes(inputValue))
      .map((item, index) => (
        <StyledMenuItem
          tag="li"
          value={item}
          text={item}
          {...getItemProps({
            key: item,
            index,
            item,
            style: {
              backgroundColor:
                highlightedIndex === index ? "lightgray" : "white",
              fontWeight: selectedItem === item ? "bold" : "normal"
            }
          })}
        />
      ))}
  </ul>
</StyledMenu>;
   <div>
   {items
     .filter(i => !inputValue || i.includes(inputValue))
     .map((item, index) => (
       <div
         {...getItemProps({
           key: item,
           index,
           item,
           style: {
             backgroundColor:
               highlightedIndex === index
                 ? "lightgray"
                 : "white",
             fontWeight:
               selectedItem === item ? "bold" : "normal"
           }
         })}
       >
         {item}
       </div>
     ))}
 </div>*/
