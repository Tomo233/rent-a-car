import styled from "styled-components";
import { useState } from "react";
import Heading from "../../components/Heading";
import Span from "../../components/Span";
import Button from "../../components/Button";
import FlexContainer from "../../components/FlexContainer";
import { useForm } from "react-hook-form";

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

const ErrorLabel = styled.label`
  color: red;
  font-weight: 500;
  letter-spacing: 1px;
`;

function LoginForm() {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data, e) => {
    e.preventDefault();
  };

  if (isSignUpPage) {
    return (
      <StyledForm onSubmit={handleSubmit(handleSignUp)}>
        <Heading as="h2">Sign Up</Heading>
        <ErrorLabel>{errors?.userName?.message || ""}</ErrorLabel>
        <StyledInput
          type="text"
          placeholder="User Name"
          {...register("userName", { required: "Required Field" })}
        />
        <ErrorLabel>{errors?.signUpEmail?.message || ""}</ErrorLabel>
        <StyledInput
          type="email"
          placeholder="Email"
          {...register("signUpEmail", { required: "Required Field" })}
        />
        <ErrorLabel>{errors?.signUpPassword?.message || ""}</ErrorLabel>
        <StyledInput
          type="password"
          placeholder="Password"
          {...register("signUpPassword", { required: "Required Field" })}
        />
        <ErrorLabel>{errors?.confirmPassword?.message || ""}</ErrorLabel>
        <StyledInput
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Required Field",
            validate: (value) => {
              return (
                value === getValues("signUpPassword") ||
                "passwords does not match"
              );
            },
          })}
        />
        <FlexContainer>
          <p>Do have an account ?</p>
          <ToggleLink
            onClick={() => {
              setIsSignUpPage((prev) => !prev);
            }}
          >
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
      <ErrorLabel>{errors?.email?.message || ""}</ErrorLabel>
      <StyledInput
        type="email"
        placeholder="Email"
        {...register("email", { required: "Required Field" })}
      />
      <ErrorLabel>{errors?.password?.message || ""}</ErrorLabel>
      <StyledInput
        type="password"
        placeholder="Password"
        {...register("password", { required: "Required Field" })}
      />
      <Span>forgot password?</Span>
      <Button>Login</Button>
      <FlexContainer>
        <p>Do not have an account ?</p>
        <ToggleLink
          onClick={() => {
            setIsSignUpPage((prev) => !prev);
          }}
        >
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
