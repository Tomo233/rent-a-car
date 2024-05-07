import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import HeaderList from "./HeaderList";
import Logo from "./Logo";
// import UserAndAvatar from "./UserAndAvatar";
import BasicModal from "./BasicModal";

const StyledHeader = styled.header`
  padding-top: 15px;
`;

function Header() {
  return (
    <StyledHeader>
      <FlexContainer>
        <FlexContainer gap="50px">
          <Logo />
          <HeaderList />
        </FlexContainer>
        {/* <UserAndAvatar /> */}
        <BasicModal />
      </FlexContainer>
    </StyledHeader>
  );
}

export default Header;
