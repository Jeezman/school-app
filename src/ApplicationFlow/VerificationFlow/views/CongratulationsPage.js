import React from "react";
import styled from "styled-components";
import Icon from "../../components/simple/Icon";
import { PrimaryButton } from "../../components/simple/Button";
import { TestContentStyle } from "../../components/layout/ContentStyle";
import bitmap from "./img/bitmap@2x.png";
import francis from "./img/francis.png";
import { Heading } from "./Heading";
import globals from "../../siteStyle";
const { xs } = globals;
const TestResultContentStyle = TestContentStyle.extend`
  width: 38%;
  z-index: 2;
  margin-top: 0;
  border: 0;
  box-shadow: 0 8px 16px 0 rgba(27, 39, 51, 0.08);
  border: 1px solid #e6e8eb;
  border-radius: 4px;
  padding: 55px 67px 60px;
  & .body-text {
    color: #484848;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
    line-height: 26px;
    width: 100%;
    margin-bottom: 27px;
  }

  .welcome-text {
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    color: #0064e6;
  }

  & ${PrimaryButton} {
    width: 90%;
    line-height: 20px;
    font-size: 16px;
    background-color: #0064e6;
    border-color: #0064e6;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      flex: 1;
    }
    @media (max-width: ${xs}px) {
      width: 70%;
    }
  }
`;

class CongratulationsPage extends React.Component {
  render() {
    return (
      <BgWrap>
        <Bitmap />
        <Logo>
          <Icon name="primary-logo" />
        </Logo>
        <TestResultContentStyle>
          <Avatar image={francis} />
          <Heading mb="0">
            <h1>Bravo!</h1>
          </Heading>
          <p className="welcome-text">Welcome to Tuteria Family</p>

          <p className="body-text">
            We’re super excited to have you on board [Godwin]. Your profile is
            now active and clients can now see your profile. Expect your first
            client soon!
          </p>

          <PrimaryButton>
            <Icon name="home" />
            <span>Head to Your Dashboard</span>
          </PrimaryButton>
        </TestResultContentStyle>
      </BgWrap>
    );
  }
}

const BgWrap = styled.div`
  //   height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 200px;
  height: 68px;
  background: #fbf9fc;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-bottom: 42px;
  margin-top: 22px;
`;

const Avatar = styled.div`
  height: 174px;
  width: 174px;
  min-height: 174px;
  min-width: 174px;
  border-radius: 100%;
  background-image: url(${props => props.image});
  background-size: 114%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Bitmap = styled.div`
  background-image: url(${bitmap});
  background-repeat: round;
  height: 300px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export default CongratulationsPage;
