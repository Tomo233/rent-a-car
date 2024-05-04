import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-primary-blue);
  border: none;
  padding: ${(props) =>
    props.type === "secondary" ? "16px 50px" : "12px 80px"};
  padding: ${(props) => props.type === "short" && "20px 3px"};
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 16px;
  border-radius: 3px;
  color: white;
`;

export default Button;
