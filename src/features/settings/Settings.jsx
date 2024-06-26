import styled from "styled-components";
import Heading from "../../components/Heading";
import UserDataForm from "../authentication/UserDataForm";

const StyledSettings = styled.div`
  margin-top: 85px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 600px;
`;

const HeadingParent = styled.div`
  padding: 30px;
`;

function Settings() {
  return (
    <StyledSettings>
      <HeadingParent>
        <Heading as="h3">Account settings</Heading>
      </HeadingParent>
      <UserDataForm />
    </StyledSettings>
  );
}

export default Settings;
