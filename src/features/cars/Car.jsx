import styled from "styled-components";
import toast from "react-hot-toast";
import Line from "../../components/Line";
import Loader from "../../components/Loader";
import Map from "../../components/Map";
import Flex from "../../components/Flex";
import Grid from "../../components/Grid";
import Button from "../../components/Button";
import BasicModal from "../../components/BasicModal";
import Heading from "../../components/Heading";
import ListItem from "../../components/ListItem";

import { useCarById } from "./useCarById";
import { useBookCar } from "./useBookCar";
import { useCarBookingsByCarId } from "../bookings/useCarBookingsByCarId";
import { useCarContext } from "../../context/CarContext";
import { useParams } from "react-router-dom";

const StyledCar = styled.div`
  margin-top: 50px;
`;

const CarContent = styled.div`
  margin-top: 15px;
`;

const ModalContent = styled.div`
  background-color: white;
  height: 300px;
`;

const CarImage = styled.img`
  width: 700px;

  @media (max-width: 1200px) {
    width: 400px;
  }
`;

const ResponsiveFlex = styled(Flex)`
  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
  @media (max-width: 700px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
function Car() {
  const { carId } = useParams();
  const { data, isLoading: carLoading } = useCarById();
  const { carBookings, isLoadingCarBookings } = useCarBookingsByCarId(carId);
  const { bookCar, isBooking } = useBookCar();
  const { formData } = useCarContext();
  const { startDate, endDate, startTime, endTime } = formData;

  if (carLoading || isLoadingCarBookings || isBooking) return <Loader />;

  if (!data) return <p>Car does not exist</p>;

  const {
    image,
    name,
    horsepower,
    features,
    engine,
    model,
    price,
    mileage,
    year,
    location,
    transmission,
    fuelType,
    lat,
    lng,
  } = data;

  const button = <Button type="short">{price}$/Dan</Button>;

  let difference = new Date(endDate).getTime() - new Date(startDate).getTime();
  let daysDifference = difference / (1000 * 3600 * 24);
  const carPrice = price * daysDifference;

  // Check if the car is reserved for the selected date and time range
  const selStartDateTime = new Date(`${startDate} ${startTime}`);
  const selEndDateTime = new Date(`${endDate} ${endTime}`);

  const isReserved = carBookings?.some((reservation) => {
    const resStartDateTime = new Date(
      `${reservation.startDate} ${reservation.startTime}`
    );
    const resEndDateTime = new Date(
      `${reservation.endDate} ${reservation.endTime}`
    );

    return (
      selStartDateTime < resEndDateTime && selEndDateTime > resStartDateTime
    );
  });

  const handleReserve = () => {
    bookCar(carPrice);
  };

  return (
    <StyledCar>
      <ResponsiveFlex $gap="30px" $justify="normal">
        <div>
          <CarImage src={image} alt={name} />
        </div>
        <CarContent>
          <div>
            <Heading for="car">
              {name} {model}
            </Heading>
            <ul>
              <ListItem>+387 66 357 126</ListItem>
              <ListItem>rental@gmail.com</ListItem>
              <ListItem>Lokacija : {location}</ListItem>

              <ListItem>
                <Flex $gap="30px" $justify="normal">
                  <span>Price :</span>

                  {isReserved ? (
                    <Button
                      type="short"
                      onClick={() => {
                        toast("Car is booked for this date", {
                          icon: "🚙",
                        });
                      }}
                    >
                      {price}$/Dan
                    </Button>
                  ) : (
                    <BasicModal button={button}>
                      <ModalContent>
                        <Flex $justify="center">
                          <Grid $gap="15px">
                            <Heading as="h3">
                              {name} {model}
                            </Heading>
                            <p>
                              Date : {startDate} - {endDate}
                            </p>
                            <p>
                              Time : {startTime} - {endTime}
                            </p>
                            <p>{daysDifference} days</p>
                            <p>Price : {carPrice}$</p>
                            <Button onClick={handleReserve}>Book</Button>
                          </Grid>
                        </Flex>
                      </ModalContent>
                    </BasicModal>
                  )}
                </Flex>
              </ListItem>
            </ul>
          </div>
        </CarContent>
      </ResponsiveFlex>
      <Line />
      <CarContent>
        <Flex>
          <div>
            <Heading headingfor="car">Opste informacije</Heading>
            <ul>
              <ListItem>Car: {name}</ListItem>
              <ListItem>Car Model: {model}</ListItem>
              <ListItem>Engine: {engine}</ListItem>
              <ListItem>Horse Power: {horsepower}</ListItem>
              <ListItem>Transmission: {transmission}</ListItem>
              <ListItem>FuelType: {fuelType}</ListItem>
              <ListItem>Model Year: {year}</ListItem>
              <ListItem>Mileage: {mileage}</ListItem>
            </ul>
          </div>
          <Map lat={lat} lng={lng} />
        </Flex>
      </CarContent>

      <Line />
      <CarContent>
        <Heading for="car" $notaligned={true}>
          Dodatne informacije
        </Heading>
        <ul>
          {features.map((f) => (
            <ListItem key={f}>{f}</ListItem>
          ))}
        </ul>
      </CarContent>
    </StyledCar>
  );
}

export default Car;
