import styled from "styled-components";
import { useState } from "react";
import Heading from "./Heading";
import Span from "./Span";
import Button from "./Button";
import FlexContainer from "./FlexContainer";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 15px;
  border-radius: 10px;
  background-color: white;
`;

const StyledInput = styled.input`
  padding-left: 5px;
  background-color: var(--color-border-gray);
  border: none;
  width: 250px;
  height: 45px;
`;

const GoogleButton = styled.button`
  border: none;
  background-color: var(--color-primary-blue);
  height: 50px;
  margin-bottom: 25px;
  border: 3px solid var(--color-border-gray);
`;

const GoogleSpan = styled.span`
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-right: 5px;
`;

const GoogleFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 45px;
  background-color: white;
`;

const ButtonParent = styled.div`
  padding-bottom: 30px;
`;

const ToggleLink = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
`;

function LoginForm() {
  const [isSignUpPage, setIsSignUpPage] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setIsSignUpPage((prev) => !prev);
  };

  if (isSignUpPage) {
    return (
      <StyledForm>
        <Heading as="h2">Sign Up</Heading>
        <StyledInput type="text" placeholder="User Name" />
        <StyledInput type="email" placeholder="Email" />
        <StyledInput type="password" placeholder="Password" />
        <StyledInput type="password" placeholder="Confirm Password" />
        <FlexContainer>
          <p>Do have an account ?</p>
          <ToggleLink onClick={handleForm}>
            <Span>Login</Span>
          </ToggleLink>
        </FlexContainer>
        <ButtonParent>
          <Button>SignUp</Button>
        </ButtonParent>
      </StyledForm>
    );
  }

  return (
    <StyledForm>
      <Heading as="h2">Login</Heading>
      <StyledInput type="email" placeholder="Email" />
      <StyledInput type="password" placeholder="Password" />
      <Span>forgot password?</Span>
      <Button>Login</Button>
      <FlexContainer>
        <p>Do not have an account ?</p>
        <ToggleLink onClick={handleForm}>
          <Span>Sign Up</Span>
        </ToggleLink>
      </FlexContainer>
      <p>Or</p>
      <GoogleButton>
        <FlexContainer>
          <GoogleFlex>
            <img src="./googleLogo.jpg" alt="" height="25px" />
          </GoogleFlex>
          <GoogleSpan>Login With Google</GoogleSpan>
        </FlexContainer>
      </GoogleButton>
    </StyledForm>
  );
}

export default LoginForm;
