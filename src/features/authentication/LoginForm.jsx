/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import Heading from "../../components/Heading";
import Span from "../../components/Span";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import Grid from "../../components/Grid";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { useLogin } from "./useLogin";
import FileInput from "../../components/FileInput";

const StyledForm = styled.form`
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

const GoogleFlex = styled(Flex)`
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

function LoginForm({ handleClose }) {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const { signup, isSigning } = useSignup();
  const { login, isLoading } = useLogin();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleForm = (data) => {
    const {
      signUpEmail,
      signUpPassword,
      email,
      password,
      phone,
      userName,
      file = [],
    } = data;

    const avatar = file[0];

    if (isSignUpPage) {
      signup({ signUpEmail, signUpPassword, phone, userName, avatar });
    } else {
      login({ email, password });
    }

    reset();
    handleClose();
  };

  if (isSignUpPage) {
    return (
      <StyledForm onSubmit={handleSubmit(handleForm)}>
        <Grid $gap="15px">
          <Heading as="h2">Sign Up</Heading>
          <ErrorLabel>{errors?.userName?.message || ""}</ErrorLabel>
          <StyledInput
            type="text"
            placeholder="User Name"
            {...register("userName", {
              required: "Required Field",
            })}
            minLength={5}
            maxLength={30}
            disabled={isSigning}
          />
          <ErrorLabel>{errors?.signUpEmail?.message || ""}</ErrorLabel>
          <StyledInput
            type="email"
            placeholder="Email"
            {...register("signUpEmail", {
              required: "Required Field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            minLength={5}
            maxLength={30}
            disabled={isSigning}
          />
          <ErrorLabel>{errors?.phone?.message || ""}</ErrorLabel>
          <StyledInput
            type="tel"
            placeholder="Phone Number"
            {...register("phone", {
              required: "Required Field",
              pattern: {
                value: /^\+?[1-9][0-9]{7,14}$/,
                message: "Invalid phone number",
              },
            })}
            minLength={5}
            maxLength={30}
            disabled={isSigning}
          />
          <FileInput type="file" {...register("file")} disabled={isSigning} />
          <ErrorLabel>{errors?.signUpPassword?.message || ""}</ErrorLabel>
          <StyledInput
            type="password"
            placeholder="Password"
            {...register("signUpPassword", { required: "Required Field" })}
            minLength={5}
            maxLength={30}
            disabled={isSigning}
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
                  "Passwords do not match"
                );
              },
            })}
            minLength={5}
            maxLength={30}
            disabled={isSigning}
          />
          <Flex $gap="5px">
            <p>Do you have an account?</p>
            <ToggleLink
              onClick={() => {
                reset();
                setIsSignUpPage((prev) => !prev);
              }}
              disabled={isSigning}
            >
              <Span>Login</Span>
            </ToggleLink>
          </Flex>
          <ButtonParent>
            <Button>SignUp</Button>
          </ButtonParent>
        </Grid>
      </StyledForm>
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <Grid $gap="15px">
        <Heading as="h2">Login</Heading>
        <ErrorLabel>{errors?.email?.message || ""}</ErrorLabel>
        <StyledInput
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Required Field",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          disabled={isLoading}
        />
        <ErrorLabel>{errors?.password?.message || ""}</ErrorLabel>
        <StyledInput
          type="password"
          placeholder="Password"
          {...register("password", { required: "Required Field" })}
          disabled={isLoading}
        />
        <Span>Forgot password?</Span>
        <Button>Login</Button>
        <Flex $gap="5px">
          <p>Do not have an account?</p>
          <ToggleLink
            onClick={() => {
              reset();
              setIsSignUpPage((prev) => !prev);
            }}
            disabled={isLoading}
          >
            <Span>Sign Up</Span>
          </ToggleLink>
        </Flex>
        <p>Or</p>
        <GoogleButton disabled={isLoading}>
          <Flex $gap="10px">
            <GoogleFlex $justify="center">
              <img src="./google-logo.jpg" alt="" height="25px" />
            </GoogleFlex>
            <GoogleSpan>Login With Google</GoogleSpan>
          </Flex>
        </GoogleButton>
      </Grid>
    </StyledForm>
  );
}

export default LoginForm;
