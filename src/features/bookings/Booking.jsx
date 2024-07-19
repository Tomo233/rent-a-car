import styled from "styled-components";
import Line from "../../components/Line";
import Loader from "../../components/Loader";
import Map from "../../components/Map";
import Flex from "../../components/Flex";
import ListItem from "../../components/ListItem";
import Heading from "../../components/Heading";
import { useBookingById } from "./useBookingById";
import { useUser } from "../authentication/useUser";
import Button from "../../components/Button";
import { useDeleteBooking } from "./useDeleteBooking";
import { useParams } from "react-router-dom";

const StyledBooking = styled.div`
  margin-top: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  place-items: center;
`;

const Span = styled.span`
  font-weight: 600;
`;

const Content = styled.div`
  margin-top: 15px;
`;

function Booking() {
  const { booking, isLoadingBooking } = useBookingById();
  const { user, isLoadingUser } = useUser();
  const { deleteBooking, isDeletingBooking } = useDeleteBooking(
    "Booking is successfully finished"
  );
  const { bookingId } = useParams();

  if (isLoadingBooking || isLoadingUser || isDeletingBooking) return <Loader />;

  if (!booking.length) return <p>Booking does not exist</p>;

  const {
    image,
    name,
    horsepower,
    features,
    engine,
    model,
    mileage,
    year,
    transmission,
    fuelType,
    lat,
    lng,
    street,
  } = booking.at(0).cars;

  const { startDate, endDate, startTime, endTime, price, user_id } =
    booking.at(0);

  if (user_id !== user.id)
    return <p>You do not have any reservation for this booking</p>;

  const today = new Date();
  const endDateTime = new Date(`${endDate} ${endTime}`);

  const isFinished = today < endDateTime;

  return (
    <StyledBooking>
      <Grid>
        <div>
          <img src={image} alt={name} width="700px" />
          <Line />
          <div style={{ marginTop: "30px" }}>
            <Map lat={lat} lng={lng} />
          </div>
        </div>
        <div>
          <div>
            <Flex>
              <Content>
                <Heading for="car" $notaligned={true}>
                  Detalji iznajmljivanja
                </Heading>
                <ul>
                  <ListItem>
                    <Span> Adresa preuzimanja:</Span> {street}
                  </ListItem>
                  <ListItem>
                    <Span> Vreme preuzimanja:</Span> {startDate} | {startTime}
                  </ListItem>
                  <ListItem>
                    <Span>Vreme povratka:</Span> {endDate} | {endTime}
                  </ListItem>
                  <ListItem>
                    <Span>Cijena: </Span> {price}$
                  </ListItem>
                  {isFinished && (
                    <ListItem>
                      <Button
                        type="short"
                        onClick={() => deleteBooking(bookingId)}
                      >
                        Finish Booking
                      </Button>
                      ;
                    </ListItem>
                  )}
                </ul>
              </Content>
            </Flex>
          </div>
          <Line />
          <div>
            <Flex>
              <Content>
                <Heading for="car" $notaligned={true}>
                  Opste informacije
                </Heading>
                <ul>
                  <ListItem>
                    <Span>Car:</Span> {name}
                  </ListItem>
                  <ListItem>
                    <Span>Car Model:</Span> {model}
                  </ListItem>
                  <ListItem>
                    <Span>Engine:</Span> {engine}
                  </ListItem>
                  <ListItem>
                    <Span>Horse Power:</Span> {horsepower}
                  </ListItem>
                  <ListItem>
                    <Span>Transmission:</Span> {transmission}
                  </ListItem>
                  <ListItem>
                    <Span>FuelType:</Span> {fuelType}
                  </ListItem>
                  <ListItem>
                    <Span>Model Year:</Span> {year}
                  </ListItem>
                  <ListItem>
                    <Span>Mileage:</Span> {mileage}
                  </ListItem>
                </ul>
              </Content>
            </Flex>
          </div>

          <Line />
          <Content>
            <Heading for="car" $notaligned={true}>
              Dodatne informacije
            </Heading>
            <ul>
              {features?.map((f) => (
                <ListItem key={f}>{f}</ListItem>
              ))}
            </ul>
          </Content>
        </div>
      </Grid>
    </StyledBooking>
  );
}

export default Booking;
