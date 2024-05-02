import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import HeaderList from "./HeaderList";
import Logo from "./Logo";
import UserAndAvatar from "./UserAndAvatar";

const StyledHeader = styled.header`
  padding-top: 15px;
`;

function Header() {
  return (
    <StyledHeader>
      <FlexContainer>
        <FlexContainer>
          <Logo />
          <HeaderList />
        </FlexContainer>
        <UserAndAvatar />
      </FlexContainer>
    </StyledHeader>
  );
}

export default Header;
