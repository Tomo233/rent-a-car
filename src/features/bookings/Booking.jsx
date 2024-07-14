import styled from "styled-components";
import Line from "../../components/Line";
import Loader from "../../components/Loader";
import Map from "../../components/Map";
import FlexContainer from "../../components/FlexContainer";
import ListItem from "../../components/ListItem";
import { useCarById } from "../cars/useCarById";
import Heading from "../../components/Heading";

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
  const { data, isLoading: carLoading } = useCarById();

  if (carLoading) return <Loader />;

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
    street,
  } = data;

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
                    <Span> Vreme preuzimanja:</Span> {model}
                  </ListItem>
                  <ListItem>
                    <Span>Vreme povratka:</Span> {engine}
                  </ListItem>
                  <ListItem>
                    <Span>Cijena: </Span> 500$
                  </ListItem>
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
              {features.map((f) => (
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
