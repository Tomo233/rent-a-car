import styled from "styled-components";
import { useLocation } from "react-router-dom";

import FlexContainer from "./FlexContainer";
import HeaderList from "./HeaderList";
import Logo from "./Logo";
import BasicModal from "./BasicModal";
import Container from "./Container";
// import UserAndAvatar from "./UserAndAvatar";

const StyledHeader = styled.header`
  padding-top: 15px;
  background-color: ${(props) =>
    props.isHomePage ? "transparent" : "#171717"};
`;

function Header() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <StyledHeader isHomePage={isHomePage}>
      <Container>
        <FlexContainer>
          <FlexContainer gap="50px">
            <Logo />
            <HeaderList />
          </FlexContainer>
          {/* <UserAndAvatar /> */}
          <BasicModal />
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
}

export default Header;
