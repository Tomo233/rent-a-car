import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 60px;
`;

function Logo() {
  return (
    <NavLink to="/">
      <StyledLogo src="/car.png" />
    </NavLink>
  );
}

export default Logo;
