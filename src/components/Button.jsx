import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-primary-blue);
  color: white;
  border: none;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 16px;
  padding: 16px 50px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: ${(props) => (props.type === "short" ? "20px 5px" : "16px 50px")};
`;

export default Button;
