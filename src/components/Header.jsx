import styled from "styled-components";
import { useLocation } from "react-router-dom";

import FlexContainer from "./FlexContainer";
import HeaderList from "./HeaderList";
import Logo from "./Logo";
import BasicModal from "./BasicModal";
import Container from "./Container";
import LoginForm from "./LoginForm";
import MuiButton from "@mui/material/Button";
// import UserAndAvatar from "./UserAndAvatar";

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
  const isHomePage = pathname === "/";

  return (
    <StyledHeader $ishomepage={isHomePage}>
      <Container>
        <FlexContainer>
          <FlexContainerWithGap $gap="50px">
            <Logo />
            <HeaderList />
          </FlexContainerWithGap>
          {/* <UserAndAvatar /> */}
          <BasicModal button={button}>
            <LoginForm />
          </BasicModal>
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
}

export default Header;
