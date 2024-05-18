import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import SortBy from "../../components/SortBy";
import Filter from "../../components/Filter";

const StyledCarOperations = styled.section`
  margin-top: 30px;
`;

function CarOperations() {
  return (
    <StyledCarOperations>
      <FlexContainer>
        <Filter
          filters={[
            [
              "price",
              {
                query: "price-zero-fifty",
                text: "0$ - 50$",
              },
              {
                query: "price-fifty-hundred",
                text: "50$ - 100$",
              },
              {
                query: "price-hundred-twoHundred",
                text: "100$ - 200$",
              },
            ],

            [
              "transmission",
              {
                query: "transmission-cvt",
                text: "CVT",
              },
              {
                query: "transmission-automatic",
                text: "Automatic",
              },
            ],
            [
              "fuelType",
              {
                query: "fuelType-gasoline",
                text: "Gasoline",
              },
              {
                query: "fuelType-diesel",
                text: "Diesel",
              },
              {
                query: "fuelType-electric",
                text: "Electric",
              },
            ],
          ]}
        />
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
