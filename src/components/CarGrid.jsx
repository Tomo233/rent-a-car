/* eslint-disable react/prop-types */
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

function CarGrid({ children }) {
  return <Grid>{children}</Grid>;
}

export default CarGrid;
