// import React from "react";
// import styled from "styled-components";
// import Tooltip, { Summary } from "../components/simple/Tooltip";
// import { LinkedinButton } from "../components/simple/Button";
// import Flag from "../components/simple/CountryFlag";
// import IconWithText from "../components/simple/IconWithText";
// import Col from "../components/simple/Grid";
// import Icon from "../components/simple/Icon";
// import FormGroup from "../components/simple/FormGroup";
// import InputAddon from "../components/simple/InputAddon";
// import FormInput from "../components/simple/Input";
// import FormSelect, { Option } from "../components/simple/Select";
// import FormTextarea from "../components/simple/TextArea";
// import ToggleSelect, { ToggleOption } from "../components/simple/ToggleSelect";
// import { Checkbox, Radio } from "../components/simple/CheckInput";
// import Dialog, {
//   PopoverTitle,
//   PopoverBody
// } from "../components/simple/Popover";
// import { Label, Form, HelpBlock } from "../components/simple/Form/index";
// import maleIcon from "../components/simple/icons/male.svg";
// import femaleIcon from "../components/simple/icons/female.svg";
// import "../fonts/font-awesome.css";
// const Sidebar = styled.div`
// width: 279px; // 2 columns
// & .step_heading{
//     color: #8A8A8A;
//     font-family: "Circular Bold";
//     font-size: 14px;
//     font-weight: bold;
//     line-height: 18px;
//     margin-bottom: 7px;
//     margin-left: 3px;
// }
// & .heading{
//     color: #3D464D;
//     font-family: "Circular Bold";
//     font-size: 32px;
//     font-weight: 500;
//     line-height: 38px;
//     margin-bottom: 8px;
// }
// & .description{
//     color: #777777;
//     font-family: "Circular Book";
//     font-size: 15px;
//     font-weight: 300;
//     line-height: 22px;
//     margin-bottom: 23px;
// }
// }
// `;
// const Rightbar = styled.div`
//   width: 22%;
//   margin-left: 67.92px;
// `;

// const Content = styled.div`
//   margin-top: 64px;
//   margin-left: 70px;
//   display: flex;
// `;

// const PersonalInfoPage = () => {
//   const tooltip = (
//     <Dialog style={{ marginRight: 10 }}>
//       <PopoverTitle>Not Great</PopoverTitle>
//       <PopoverBody link={{ url: "", text: "Try Again" }}>
//         The best password is to hard to guess.
//       </PopoverBody>
//     </Dialog>
//   );

//   return (
//     <Content>
//       <Sidebar>
//         <div className="step_heading">STEP 1</div>
//         <div className="heading">Basic Profile Information</div>
//         <div className="description">
//           Enter your profile information below. Make sure you enter the details
//           correctly. All your details are protected and will not be shared with
//           anyone
//         </div>
//         <LinkedinButton>Import from LinkedIn </LinkedinButton>
//       </Sidebar>
//       <Form>
//         <Col>
//           <FormGroup>
//             <Label>First Name</Label>
//             <FormInput type="text" placeholder="Godwin" />
//           </FormGroup>
//           <FormGroup error>
//             <Label>Last Name</Label>
//             <FormInput type="text" placeholder="Benson" />
//           </FormGroup>
//         </Col>
//         <FormGroup>
//           <Label>Email Address</Label>
//           <FormInput type="text" placeholder="busybenson@gmail.com" />
//           <HelpBlock>
//             <IconWithText>
//               <span>Email Verified</span>
//             </IconWithText>
//           </HelpBlock>
//         </FormGroup>
//         <FormGroup>
//           <Label>Description</Label>
//           <FormTextarea placeholder="Description" />
//         </FormGroup>
//         <FormGroup>
//           <Label>Gender</Label>
//           <ToggleSelect>
//             <ToggleOption active icon={<img src={maleIcon} />}>
//               Male
//             </ToggleOption>
//             <ToggleOption icon={<img src={femaleIcon} />}>Female</ToggleOption>
//           </ToggleSelect>
//         </FormGroup>
//         <FormGroup>
//           <Label>Birth Date</Label>
//           <Col>
//             <FormSelect>
//               <Option value="">Select Month</Option>
//               <Option value="January">January</Option>
//               <Option value="Febuary">Febuary</Option>
//             </FormSelect>
//             <FormSelect>
//               <Option value="">Select Day</Option>
//             </FormSelect>
//             <FormSelect>
//               <Option value="">Select Year</Option>
//             </FormSelect>
//           </Col>
//         </FormGroup>
//         <FormGroup>
//           <Label>Country</Label>
//           <InputAddon>
//             <Flag>
//               <div className="country" />
//             </Flag>
//             <FormSelect value="Nigeria" width={100 - 13.5}>
//               <Option>Nigeria</Option>
//             </FormSelect>
//           </InputAddon>
//         </FormGroup>
//         <FormGroup>
//           <Label>Phone Number</Label>
//           <InputAddon>
//             <Flag>
//               <div>+234</div>
//             </Flag>
//             <FormInput width={100 - 13.5} placeholder="8078368264" />
//           </InputAddon>
//           <HelpBlock>
//             <IconWithText>
//               <span>Phone Verified By SMS</span>
//             </IconWithText>
//             <IconWithText marginTop={19} color="blue" icon="plus">
//               <span>Add another phone number</span>
//             </IconWithText>
//           </HelpBlock>
//         </FormGroup>
//         <FormGroup>
//           <Label>Current Address</Label>
//           <FormInput placeholder="E.g. Saint John Street Gowon Estate Ipaja" />
//         </FormGroup>
//         <Col>
//           <FormGroup>
//             <Label>State</Label>
//             <FormSelect>
//               <Option>Lagos State</Option>
//             </FormSelect>
//           </FormGroup>
//           <FormGroup>
//             <Label>Area</Label>
//             <FormSelect>
//               <Option>Select Area</Option>
//             </FormSelect>
//           </FormGroup>
//           <FormGroup>
//             <Label>City</Label>
//             <FormInput placeholder="Type your city" />
//           </FormGroup>
//         </Col>
//       </Form>
//       <Rightbar>
//         <Tooltip icon="map" closeButton={true}>
//           <h3>Current Location</h3>
//           <Summary>
//             <span>
//               Enter your current location. This should be the address where you
//               will be attending lessons from.{" "}
//             </span>
//             <br />
//             <span>
//               NOTE: If you move to a new location, you must update it here.
//             </span>
//           </Summary>
//         </Tooltip>
//       </Rightbar>
//     </Content>
//   );
// };
// export default PersonalInfoPage;
