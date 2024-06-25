import styled from "styled-components";
import { useLocation } from "react-router-dom";

import FlexContainer from "./FlexContainer";
import HeaderList from "./HeaderList";
import Logo from "./Logo";
import BasicModal from "./BasicModal";
import Container from "./Container";
import MuiButton from "@mui/material/Button";
import LoginForm from "../features/authentication/LoginForm";
import UserAndAvatar from "./UserAndAvatar";
import { useGetUser } from "../features/authentication/useGetUser";

const StyledHeader = styled.header`
  padding-top: 15px;
  background-color: ${(props) =>
    props.$ishomepage ? "transparent" : "#171717"};
`;

const FlexContainerWithGap = styled(FlexContainer)`
  gap: ${(props) => props.$gap};
`;

const StyledButton = styled(MuiButton)`
  border: 1px solid white !important;
  background-color: transparent !important;
  color: white !important;
`;

const button = <StyledButton>Login / SignUp</StyledButton>;

function Header() {
  const { pathname } = useLocation();
  const { user, isLoadingUser } = useGetUser();

  const isHomePage = pathname === "/";

  return (
    <StyledHeader $ishomepage={isHomePage}>
      <Container>
        <FlexContainer>
          <FlexContainerWithGap $gap="50px">
            <Logo />
            <HeaderList />
          </FlexContainerWithGap>
          {isLoadingUser || !user ? (
            <BasicModal button={button}>
              <LoginForm />
            </BasicModal>
          ) : (
            <UserAndAvatar />
          )}
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
}

export default Header;
