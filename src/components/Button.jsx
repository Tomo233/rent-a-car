import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-primary-blue);
  color: white;
  border: none;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 16px;
  border-radius: 3px;
  padding: ${(props) => (props.type === "short" ? "20px 5px" : "16px 50px")};

  @media (max-width: 600px) {
    padding: 15px 25px !important;
  }
  @media (max-width: 320px) {
    padding: 15px 3px !important;
  }
`;

export default Button;
