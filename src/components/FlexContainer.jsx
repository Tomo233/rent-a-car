import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "10px")};
  flex-wrap: wrap;
`;

export default FlexContainer;
