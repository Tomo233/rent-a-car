import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify = "space-between" }) => justify};
  align-items: ${({ align = "center" }) => align};
  gap: ${({ gap = "0" }) => gap};
  flex-direction: ${({ direction = "row" }) => direction};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
`;

export default Flex;
