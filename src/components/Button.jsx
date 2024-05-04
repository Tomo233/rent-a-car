import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-primary-blue);
  border: none;
  padding: ${(props) =>
    props.type === "secondary" ? "12px 50px" : "12px 80px"};
  padding: ${(props) => props.type === "short" && "20px 5px"};
  font-weight: 600;
  z-index: 100;
  letter-spacing: 2px;
  font-size: 16px;
  border-radius: 3px;
  color: white;
`;

export default Button;
