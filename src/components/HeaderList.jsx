import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  gap: 50px;
`;

const ListItem = styled(NavLink)`
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
`;

function HeaderList() {
  return (
    <StyledList>
      <ListItem to="/aboutUs">About Us</ListItem>
      <ListItem to="cars">Cars</ListItem>
      <ListItem to="/bookings">Bookings</ListItem>
    </StyledList>
  );
}

export default HeaderList;
