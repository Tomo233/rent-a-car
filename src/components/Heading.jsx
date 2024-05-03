import styled, { css } from "styled-components";

const Heading = styled.h2`
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 45px;
      text-align: center;
      margin: 30px 0;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 20px;
      text-align: center;
    `}

  color: black;
`;

export default Heading;
