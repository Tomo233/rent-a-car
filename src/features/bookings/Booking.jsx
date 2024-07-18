import styled from "styled-components";
import Line from "../../components/Line";
import Loader from "../../components/Loader";
import Map from "../../components/Map";
import FlexContainer from "../../components/FlexContainer";
import ListItem from "../../components/ListItem";
import Heading from "../../components/Heading";
import { useBookingById } from "./useBookingById";
import { useUser } from "../authentication/useUser";
import Button from "../../components/Button";
import BasicModal from "../../components/BasicModal";

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

const ModalContent = styled.div`
  background-color: white;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  input {
    width: 300px;
    height: 45px;
    text-align: center;
  }
`;

const button = <Button type="short">Finish Booking</Button>;

function Booking() {
  const { booking, isLoadingBooking } = useBookingById();
  const { user, isLoadingUser } = useUser();

  if (isLoadingBooking || isLoadingUser) return <Loader />;

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
            <FlexContainer>
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
                      <BasicModal button={button}>
                        <ModalContent>
                          <Heading as="h3">Finish Booking</Heading>
                          <input
                            type="text"
                            placeholder="Please enter your feedback here..."
                          />
                          <FlexContainer>
                            <Button>Send and Finish</Button>
                          </FlexContainer>
                        </ModalContent>
                      </BasicModal>
                    </ListItem>
                  )}
                </ul>
              </Content>
            </FlexContainer>
          </div>
          <Line />
          <div>
            <FlexContainer>
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
            </FlexContainer>
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
