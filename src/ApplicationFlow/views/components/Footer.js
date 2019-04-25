import styled from "styled-components";
import { PrimaryButton, DefaultButton } from "../../components/simple/Button";

const xs = 1024;

const Footer = styled.div`
  height: 100px;
  margin-top: 109px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.06);
  padding: 26px 168px 24px 106px;
  display: flex;
  & ${DefaultButton} {
    margin-right: 32px;
  }
  & ${PrimaryButton} {
    font-size: 17px;
    line-height: 22px;
  }
  @media (max-width: ${xs}px) {
    margin-top: 0;
    padding: 0;
    height: auto;
    & ${PrimaryButton} {
      display: block;
      width: 100%;
      padding-top: 18px;
      padding-bottom: 18px;
    }
  }
`;
export default Footer;
