import styled from "styled-components";
import Filter from "../../components/Filter";

const StyledCarOperations = styled.section`
  margin-top: 30px;
`;

function CarOperations() {
  return (
    <StyledCarOperations>
      <Filter
        filters={[
          [
            "price",
            {
              min: 1,
              max: 200,
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
          [
            "Car Year",
            {
              min: 2015,
              max: 2022,
            },
          ],
          [
            "Horse Power",
            {
              min: 150,
              max: 450,
            },
          ],
        ]}
        sortOptions={[
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
    </StyledCarOperations>
  );
}

export default CarOperations;
