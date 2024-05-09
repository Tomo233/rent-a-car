import styled from "styled-components";
import Heading from "./Heading";
import Span from "./Span";
import Button from "./Button";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  width: 500px;
  height: auto;
`;

const sharedStyles = `
  width: 250px;
  height: 45px;
`;

const StyledInput = styled.input`
  ${sharedStyles}
  padding-left: 5px;
`;

const Password = styled.p`
  color: blue;
  letter-spacing: 1px;
  font-weight: 500;
`;

// const Button = styled.button`
//   ${sharedStyles}
//   background-color: var(--color-primary-blue);
//   color: white;
//   outline: none;
//   border: none;
// `;

function LoginForm() {
  return (
    <StyledForm>
      <Heading as="h2">Login</Heading>
      <StyledInput type="email" placeholder="Email" />
      <StyledInput type="password" placeholder="Password" />
      <Password>forgot password?</Password>
      <Button>Login</Button>
      <p>
        Do not have an account ? <Span>Sign up</Span>
      </p>
      <p>Or</p>
      <button>Login with facebook</button>
      <button>Login with google</button>
    </StyledForm>
  );
}

export default LoginForm;
