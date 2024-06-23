import Filter from "../../components/Filter";

function BookingsOperations() {
  return (
    <>
      <Filter
        filters={[
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
    </>
  );
}

export default BookingsOperations;
