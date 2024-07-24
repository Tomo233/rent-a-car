import styled from "styled-components";
import { useLocation } from "react-router-dom";

import MuiButton from "@mui/material/Button";
import HeaderList from "./HeaderList";
import Logo from "./Logo";
import BasicModal from "./BasicModal";
import Container from "./Container";
import LoginForm from "../features/authentication/LoginForm";
import ProfileMenu from "../features/authentication/ProfileMenu";
import Flex from "./Flex";
import { useUser } from "../features/authentication/useUser";
import Menu from "./Menu";

const StyledHeader = styled.header`
  padding-top: 15px;
  background-color: ${(props) =>
    props.$ishomepage ? "transparent" : "#171717"};
`;

const StyledButton = styled(MuiButton)`
  border: 1px solid white !important;
  background-color: transparent !important;
  color: white !important;

  @media (max-width: 600px) {
    display: none !important;
  }
`;

const button = <StyledButton>Login / SignUp</StyledButton>;

function Header() {
  const { pathname } = useLocation();
  const { user, isLoadingUser } = useUser();

  const isHomePage = pathname === "/";

  return (
    <StyledHeader $ishomepage={isHomePage}>
      <Container>
        <Flex>
          <Flex $gap="20px">
            <Logo />
            <HeaderList />
          </Flex>
          {isLoadingUser || !user ? (
            <BasicModal button={button}>
              <LoginForm />
            </BasicModal>
          ) : (
            <>
              <ProfileMenu $inHeader="true" />
              <Menu />
            </>
          )}
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
