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
              query: "price-1-50",
              text: "0$ - 50$",
            },
            {
              query: "price-50-100",
              text: "50$ - 100$",
            },
            {
              query: "price-100-200",
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
          [
            "Car Year",
            {
              query: "carYear-2015-2017",
              text: "2015-2017",
            },
            {
              query: "carYear-2017-2020",
              text: "2017-2020",
            },
            {
              query: "carYear-2020-2022",
              text: "2020-2022",
            },
          ],
          [
            "Horse Power",
            {
              query: "horsePower-150-250",
              text: "150-250",
            },
            {
              query: "horsePower-250-350",
              text: "250-350",
            },
            {
              query: "horsePower-350-450",
              text: "350-450",
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
