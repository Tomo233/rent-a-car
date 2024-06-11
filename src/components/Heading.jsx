import styled, { css } from "styled-components";

const Heading = styled.h2`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 60px;
      font-weight: bold;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 45px;
      margin: 30px 0;
    `}
      
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 20px;
    `}
      
  color: ${(props) => (props.color === "white" ? "#fff" : "#000")};
  text-align: ${(props) => (props.$notaligned ? "start" : "center")};
`;

export default Heading;
