import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-primary-blue);
  border: none;
  /* padding: 12px 80px; */
  padding: ${(props) =>
    props.type === "secondary" ? "12px 50px" : "12px 80px"};
  z-index: 100;
  letter-spacing: 2px;
  font-size: 20px;
  border-radius: 3px;
`;

export default Button;
