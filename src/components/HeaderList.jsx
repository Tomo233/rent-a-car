import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "./Flex";

const StyledHeaderList = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled(NavLink)`
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
`;

function HeaderList() {
  return (
    <StyledHeaderList>
      <Flex $gap="25px">
        <ListItem to="/aboutUs">About Us</ListItem>
        <ListItem to="/bookings">Bookings</ListItem>
      </Flex>
    </StyledHeaderList>
  );
}

export default HeaderList;
