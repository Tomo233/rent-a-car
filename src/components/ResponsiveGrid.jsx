import styled from "styled-components";
import Grid from "./Grid";

const ResponsiveGrid = styled(Grid)`
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default ResponsiveGrid;
