import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "./Flex";

const ListItem = styled(NavLink)`
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
`;

function HeaderList() {
  return (
    <Flex $gap="50px">
      <ListItem to="/aboutUs">About Us</ListItem>
      <ListItem to="/bookings">Bookings</ListItem>
    </Flex>
  );
}

export default HeaderList;
