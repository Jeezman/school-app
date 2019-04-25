import styled from "styled-components";
import globals from "../../../siteStyle";

const { xs } = globals;
const SpecialDiv = styled.div`
  margin-top: 72px;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;

  @media (max-width: ${xs}px) {
    width: 100%;
    margin-top: 45px;
    margin-bottom: 0;
  }

  & h2 {
    color: ${props => (props.inverse ? "#1B2733" : "#0064e6")};
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
    @media (max-width: ${xs}px) {
      font-size: 17px;
      line-height: 22px;
      color: #484848;

      &.start-test__header {
        @media (max-width: ${xs}px) {
          color: #0064e6;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }

  & p {
    color: #47525d;
    font-size: 17px;
    line-height: 25px;
    font-weight: 300;
    margin: 0;

    @media (max-width: ${xs}px) {
      text-align: center;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      width: 75%;
      margin-bottom: -36px;
    }
  }

  & > p:last-child {
    @media (max-width: ${xs}px) {
      display: none;
    }
  }
`;
export default SpecialDiv;
