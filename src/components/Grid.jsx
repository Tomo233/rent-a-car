import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $columns = 1 }) => $columns}, 1fr);
  grid-template-rows: ${({ $rows = "auto" }) => $rows};
  gap: ${({ $gap = "0" }) => $gap};
  place-items: ${({ $items = "center" }) => $items};
  height: ${({ $height = "auto" }) => $height};
`;
export default Grid;
