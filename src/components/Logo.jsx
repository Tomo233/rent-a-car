import styled from "styled-components";

const StyledLogo = styled.img`
  width: 60px;
`;

function Logo() {
  return <StyledLogo src="/car.png" />;
}

export default Logo;
