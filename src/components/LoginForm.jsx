import styled from "styled-components";
import Heading from "./Heading";
import Span from "./Span";
import Button from "./Button";
import FlexContainer from "./FlexContainer";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: white;
`;

const StyledInput = styled.input`
  padding-left: 5px;
  background-color: var(--color-secondary-gray);
  border: none;
  width: 250px;
  height: 45px;
`;

const GoogleButton = styled.button`
  border: none;
  background-color: var(--color-primary-blue);
  height: 50px;
  margin-bottom: 25px;
  border: 3px solid var(--color-secondary-gray);
`;

const GoogleSpan = styled.span`
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-right: 5px;
`;

function LoginForm() {
  return (
    <StyledForm>
      <Heading as="h2">Login</Heading>
      <StyledInput type="email" placeholder="Email" />
      <StyledInput type="password" placeholder="Password" />
      <Span>forgot password?</Span>
      <Button>Login</Button>
      <p>
        Do not have an account ? <Span>Sign up</Span>
      </p>
      <p>Or</p>
      <GoogleButton>
        <FlexContainer>
          <div
            style={{
              backgroundColor: "white",
              height: "45px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="./googleLogo.jpg" alt="" height="25px" />
          </div>
          <GoogleSpan>Login With Google</GoogleSpan>
        </FlexContainer>
      </GoogleButton>
    </StyledForm>
  );
}

export default LoginForm;
