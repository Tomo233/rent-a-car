import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import SideBar from "../../components/SideBar";
import SortBy from "../../components/SortBy";

const StyledCarOperations = styled.section`
  margin-top: 30px;
`;

function CarOperations() {
  return (
    <StyledCarOperations>
      <FlexContainer>
        <SideBar />
        <SortBy
          options={[
            {
              query: "name-ascending",
              option: "Name A-Z",
            },
            {
              query: "name-descending",
              option: "Name Z-A",
            },
            {
              query: "price-ascending",
              option: "Price A-Z",
            },
            {
              query: "price-descending",
              option: "Price Z-A",
            },
          ]}
        />
      </FlexContainer>
    </StyledCarOperations>
  );
}

export default CarOperations;
