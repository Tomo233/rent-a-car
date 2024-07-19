import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  align-items: ${(props) => (props.align ? props.align : "center")};
  gap: ${(props) => (props.gap ? props.gap : "10px")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-wrap: wrap;
`;

export default Flex;
