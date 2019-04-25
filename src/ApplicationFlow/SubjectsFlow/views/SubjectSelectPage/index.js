import React from "react";
import styled, { css } from "styled-components";
import { Col as Column } from "react-grid-system";
import Input from "../../../components/simple/Input";

import { PrimaryBadge } from "../../../components/simple/Badge";
import SkillIcon from "../Icons";
import { Checkbox } from "../../../components/simple/CheckInput";
import Icon from "../../../components/simple/Icon";
import Media from "react-media";
import WizardWrapper from "../../../views/components/WizardPage";
import {
  ADD_SUBJECTS,
  getSubCategories,
  getSubjects,
  getCategory,
  mapStateToProps
} from "./reducers";
import SearchBar, { reusableSelectedSubject } from "../components/SearchBar";
import Sticky from "./Sticky";
import globals from "../../../siteStyle";
import { connect } from "react-redux";
const { xs } = globals;
const SubjectSearch = styled.div`
  margin-bottom: 70px;
  display: block;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (max-width: ${xs}px) {
    width: 100%;
    margin-top: 45px;
    margin-bottom: 36px;
  }
  & h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 36px;
    color: #484848;
    line-height: 40px;

    @media (max-width: ${xs}px) {
      font-size: 17px;
      font-weight: 500;
      line-height: 22px;
    }
  }
  & ${Input} {
    @media (max-width: ${xs}px) {
    }
  }
  & p {
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  & .badge-wrap {
    @media (max-width: ${xs}px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  & ${PrimaryBadge} {
    color: #484848;
    margin-right: 16px;
    font-size: 16px;
    margin-top: 5px;
    position: relative;
    padding: 5px 32px 5px 16px;
    @media (max-width: ${xs}px) {
      background-color: #0064e6;
      border-radius: 100px;
      margin-right: 8px;
      padding-top: 2px;
      padding-bottom: 5px;
    }

    & span {
      @media (max-width: ${xs}px) {
        color: #fff;
        font-size: 12px;
        margin: 0;
        padding-top: 6px;
        padding-bottom: 7px;
        line-height: 15px;
      }
    }
    & svg {
      position: absolute;
      margin-left: 10px;
      color: #0260d7;
      right: 10px;
      bottom: 10px;
      @media (max-width: ${xs}px) {
      }
    }
  }
`;
const SubjectSelect = styled.div`
  & > p {
    text-align: center;
    margin-bottom: 30px;
    font-size: 21px;
    color: #47525d;
  }
`;
const SubjectLayer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${xs}px) {
    flex-direction: column;
  }
`;
const withSkill = css`
  padding-right: 48px;
  @media (min-width: ${xs + 1}px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    flex-grow: 1.5;
  }
  @media (max-width: ${xs}px) {
    padding-right: 0;
  }

  flex-basis: 0;
`;
const withoutSkill = css`
  @media (min-width: ${xs + 1}px) {
    min-width: 685px;
    margin-left: 15%;
    margin-right: 15%;
    transition: margin-left 0.25s ease-in-out;
  }
  @media (max-width: ${xs}px) {
    width: 100%;
  }
`;
const CategorySection = styled.div`
  z-index: 10;
  ${withoutSkill} ${props => (props.clicked ? withSkill : null)};
`;
const skillBefore = css`
  min-width: 338px;
  flex-grow: 0;
  overflow: hidden;
  transform: translateX(-120%);
  opacity: 0;
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
`;
const skillAfter = css`
  flex-grow: 1;
  flex-basis: 0;
  overflow: unset;
  opacity: 1;
  transform: none;
`;

const SkillSection = styled.div`
  ${skillBefore} ${props => (props.clicked ? skillAfter : "none")};
  @media (max-width: ${xs}px) {
    display: none;
  }
  & > div {
    top: 0;
  }
`;

const Badge = ({ text, onClick }) => (
  <PrimaryBadge onClick={onClick}>
    <span>{text}</span>
    <Media query={`(max-width: ${xs}px)`}>
      {matches =>
        matches ? (
          <Icon width="8px" fill="#fff" name="close" onClick={onClick} />
        ) : (
          <Icon width="8px" name="close" onClick={onClick} />
        )
      }
    </Media>
  </PrimaryBadge>
);

class SubjectList extends React.Component {
  render() {
    const { currentIndex, clicked, onClick } = this.props;
    console.log(currentIndex);
    return (
      <SubjectSelect>
        <Media query={`(max-width: ${xs}px)`}>
          {matches =>
            matches ? null : <p>You can also select from the category below</p>
          }
        </Media>

        <SubjectLayer>
          <CategorySection clicked={clicked}>
            {this.props.categories.map((category, index) => (
              <Category
                canShow={currentIndex === index}
                currentIndex={currentIndex}
                onClick={onClick}
                index={index}
                {...category}
                updateSubjects={this.props.updateSubjects}
                selectedSubjects={this.props.selectedSubjects}
                active={currentIndex === index}
                key={index}
              />
            ))}
          </CategorySection>

          {currentIndex > -1 ? (
            <SkillSection clicked={clicked} id="subjects-layer">
              <Sticky>
                <div>
                  <SubCategories
                    category={getCategory(currentIndex)}
                    updateSubjects={this.props.updateSubjects}
                    selectedSubjects={this.props.selectedSubjects}
                  />
                </div>
              </Sticky>
            </SkillSection>
          ) : null}
        </SubjectLayer>
      </SubjectSelect>
    );
  }
}

const DropdownContainter = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #f0f0f0;
  opacity: ${props => (props.opened ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
  & > svg {
    margin-right: 20px;
  }
  & > label {
    padding-left: 46px;
  }
  & .text {
    position: relative;
    width: 100%;
    & > p {
      font-size: 19px;
      margin-bottom: 0;
    }

    & > i {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
const DropdownItem = styled.div`
  cursor: pointer;
  background-color: ${props => (props.active ? "#E3EDF8" : "")};
`;
const DropdownChildren = styled.div``;

const BaseStyle = styled.div`
  height: ${props =>
    props.height ? props.dimensions.open : props.dimensions.closed};
  border: ${props => (props.noDisplay ? "none" : "1px solid #dce0e0")};
  margin-bottom: 15px;
  width: 100%;
  overflow: hidden;
  transition: height 0.25s linear;
`;
const InnerBaseStyle = styled.div`
  ${props => "height: " + props.open};
  width: 100%;
  opacity: 1;
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-width: ${xs}px) {
    overflow-y: hidden;
  }
`;
class ReusableDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.node = null;
  }
  componentDidMount() {
    this.loadState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== undefined) {
      if (!this.state.opened || !nextProps.active) {
        this.loadState(nextProps);
      }
    }
  }
  loadState(props) {
    const { active = false } = props;
    this.setState({ opened: active });
  }
  toggleState = () => {
    const { updateParent = () => {} } = this.props;
    this.setState({ opened: !this.state.opened });
    updateParent();
  };
  render() {
    const height = this.node ? this.node.offsetHeight : "322px";
    const { closed = "67px", open, noDisplay = false } = this.props;
    const dimensions = { open: open || height, closed };
    return (
      <BaseStyle
        noDisplay={noDisplay}
        innerRef={i => (this.node = i)}
        id="style-1"
        height={this.state.opened}
        dimensions={dimensions}
      >
        <InnerBaseStyle open={open || height}>
          <DropdownItem active={false} onClick={this.toggleState}>
            {this.props.head}
          </DropdownItem>
          {this.state.opened ? this.props.children(this.state.opened) : null}
        </InnerBaseStyle>
      </BaseStyle>
    );
  }
}

class SelectDropdown extends React.Component {
  updateSelectedSubjects = subject => {
    const { updateSubjects, selectedSubjects } = this.props;
    reusableSelectedSubject(subject, selectedSubjects, updateSubjects);
  };
  selectedIndex = subject => {
    return this.props.selectedSubjects.findIndex(x => x.name === subject.name);
  };
  render() {
    const { subjects = [] } = this.props;
    return (
      <ReusableDropdown
        active={this.props.active}
        updateParent={this.props.updateParent}
        open={"320px"}
        head={
          <DropdownContainter opened={true}>
            <SkillIcon icon={this.props.icon} height={30} />
            <div className="text">
              <p>{this.props.subcategory}</p>
              <Icon name="chevron-down" />
            </div>
          </DropdownContainter>
        }
      >
        {opened => (
          <DropdownChildren opened={opened}>
            {subjects.map((subject, index) => (
              <DropdownItem>
                <DropdownContainter opened={opened}>
                  <Checkbox
                    key={index}
                    small
                    border="#36B37E"
                    innerColor="#36B37E"
                    onChange={() => {
                      this.updateSelectedSubjects(subject);
                    }}
                    checked={this.selectedIndex(subject) > -1}
                    text={subject.name}
                  />
                </DropdownContainter>
              </DropdownItem>
            ))}
          </DropdownChildren>
        )}
      </ReusableDropdown>
    );
  }
}
const CategoryItem = styled.div`
  display: flex;
  margin-bottom: 24px;
  padding: 26px;
  border: 1px solid #e6e8eb;
  cursor: pointer;
  background-color: ${props => (props.active ? "#E3EDF8" : "")};
  @media (max-width: ${xs}px) {
    padding: 16px 14px;
    align-items: center;
  }

  & .category_text {
    margin-left: 28px;
    position: relative;
    width: 100%;
    @media (max-width: ${xs}px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & h3 {
      font-size: 17px;
      color: ${props => (props.active ? "#0064E6" : "#484848")};
      margin-top: 0;
      text-transform: uppercase;

      @media (max-width: ${xs}px) {
        margin-bottom: 0;
      }
    }
    & p {
      max-width: 500px;
      color: ${props => (props.active ? "#484848" : "")};
      font-size: 17px;

      @media (max-width: ${xs}px) {
        display: none;
      }
    }
    & i {
      position: absolute;
      right: 0;
      top: 50%;

      @media (max-width: ${xs}px) {
        top: 0;
      }
    }
  }
`;
// const CategoryParent = styled.div`
//   @media (max-width: ${xs}px) {
//     height: ${props => (props.height ? props.height.offsetHeight + 97 : 97)}px;
//     transition: height 0.25s linear;
//   }
// `;
class SubCategories extends React.Component {
  state = {
    currentIndex: -1,
    subcategories: []
  };
  loadSubCategories(props) {
    const subcategories = getSubCategories(props.category);
    this.setState({ subcategories });
  }
  componentDidMount() {
    this.loadSubCategories(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.category.name !== nextProps.category.name) {
      this.loadSubCategories(nextProps);
    }
  }
  onClick = index => {
    this.setState({ currentIndex: index });
  };
  render() {
    return (
      <div>
        {this.state.subcategories.map((x, i) => (
          <SelectDropdown
            updateParent={() => this.onClick(i)}
            active={this.state.currentIndex === i}
            key={i}
            icon={x.icon}
            subjects={getSubjects(x)}
            subcategory={x.subcategory}
            updateSubjects={this.props.updateSubjects}
            selectedSubjects={this.props.selectedSubjects}
          />
        ))}
      </div>
    );
  }
}

class Category extends React.Component {
  state = {
    height: 99,
    opened: false
  };
  onClick = matches => {
    this.props.onClick(this.props.index, matches);
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { icon, name, text, active, canShow } = this.props;
    const rendered = [
      <SkillIcon key={1} icon={icon} />,
      <div key={2} className="category_text">
        <h3>{name}</h3>
        <p>{text}</p>
        <Media query={`(max-width: ${xs}px)`}>
          {matches =>
            matches ? (
              <Icon
                name={this.state.opened ? "chevron-down" : "chevron-right"}
              />
            ) : (
              <Icon name="chevron-right" />
            )
          }
        </Media>
      </div>
    ];

    const rendered2 = (
      <SubCategories
        category={name}
        updateSubjects={this.props.updateSubjects}
        selectedSubjects={this.props.selectedSubjects}
      />
    );

    return (
      <Media query={`(max-width: ${xs}px)`}>
        {matches =>
          matches ? (
            <ReusableDropdown
              ref={i => (this.node = i)}
              open={active ? "auto" : "99px"}
              noDisplay={true}
              closed="99px"
              head={
                <CategoryItem
                  active={active}
                  onClick={() => this.onClick(matches)}
                >
                  {rendered}
                </CategoryItem>
              }
            >
              {opened => (
                <Media query={`(max-width: ${xs}px)`}>
                  {matches =>
                    matches ? (
                      <div style={{ width: "99%" }}>
                        {canShow ? <div>{rendered2}</div> : null}
                      </div>
                    ) : null
                  }
                </Media>
              )}
            </ReusableDropdown>
          ) : (
            <CategoryItem active={active} onClick={() => this.onClick(false)}>
              {rendered}
            </CategoryItem>
          )
        }
      </Media>
    );
  }
}

class SubjectSelectPage extends React.Component {
  state = {
    clicked: false,
    currentIndex: -1,
    selectedSubjects: [],
    categories: []
  };
  onClick = (index, matches) => {
    this.setState({ clicked: true, currentIndex: index });
  };
  componentDidMount() {
    const { categories, selectedSubjects } = this.props;
    this.setState({
      categories,
      selectedSubjects
    });
  }
  updateSelectedSubjects = selectedSubjects => {
    // debugger;
    this.setState({ selectedSubjects });
  };
  canGoToNextPage = () => {
    return this.state.selectedSubjects.length > 0;
  };
  nextPage = () => {
    this.props.dispatch({
      type: ADD_SUBJECTS,
      value: this.state.selectedSubjects
    });
    this.props.navigateTo(0, "select-subjects", "subject-list");
  };
  previousPage = () => {
    this.props.navigateTo(0, "select-subjects", "introduction");
  };
  render() {
    return (
      <WizardWrapper
        navigationItemStyle={{ backgroundColor: "#FAFAFA" }}
        title="Select Subjects"
        goToNextScreen={this.nextPage}
        showNextScreen={!this.canGoToNextPage()}
        showPreviousScreen={true}
        goToPreviousScreen={this.previousPage}
        nextButtonText="I'm Done! Let's Proceed"
      >
        <Column>
          <SubjectSearch>
            <h2>What subject do you want to teach?</h2>
            <SearchBar
              selectedSubjects={this.state.selectedSubjects}
              onSelect={this.updateSelectedSubjects}
            />
            <p>
              Subjects You Want To Teach ({this.state.selectedSubjects.length})
            </p>
            <div className="badge-wrap">
              {this.state.selectedSubjects.map((subject, index) => (
                <Badge
                  key={index}
                  text={subject.name}
                  onClick={() => {
                    this.updateSelectedSubjects(
                      this.state.selectedSubjects.filter(
                        x => x.name !== subject.name
                      )
                    );
                  }}
                />
              ))}
            </div>
          </SubjectSearch>

          <SubjectList
            selectedSubjects={this.state.selectedSubjects}
            updateSubjects={this.updateSelectedSubjects}
            categories={this.state.categories}
            onClick={this.onClick}
            currentIndex={this.state.currentIndex}
            clicked={this.state.clicked}
          />
        </Column>
      </WizardWrapper>
    );
  }
}
export default connect(mapStateToProps)(SubjectSelectPage);
