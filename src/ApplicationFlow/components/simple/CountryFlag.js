import styled from "styled-components";

const Flag = styled.div`
  width: 13.5%;
  border: 1px solid #cacaca;
  border-radius: 2px 0 0 2px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    margin: 11px 7px;
    color: #777777;
    font-family: "Circular Medium";
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
  }
  & .country {
    background-image: ${props => `url(${props.image})`};
    height: 20px;
    background-repeat: no-repeat;
  }
`;
// export default SFlag;
export default Flag;
