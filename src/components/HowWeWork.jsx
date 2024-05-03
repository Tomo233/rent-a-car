import styled from "styled-components";
import Heading from "./Heading";
import Span from "./Span";
import FlexContainer from "./FlexContainer";
import Line from "./Line";

const StyledHowWeWork = styled.section`
  margin-bottom: 300px;
`;

const CarImage = styled.img`
  width: 150px;
  display: block;
  margin: 12px auto;
`;

const Item = styled.div`
  max-width: 400px;
  margin-top: 30px;
`;

const Paragraph = styled.p`
  margin-top: 10px;
  text-align: center;
`;

function HowWeWork() {
  return (
    <StyledHowWeWork>
      <Heading as="h2">
        How We <Span>Work</Span>
      </Heading>
      <FlexContainer>
        <Item>
          <CarImage src="./support.png" alt="" />
          <Heading as="h3">Customized Fleet Selection</Heading>
          <Paragraph>
            We boast a diverse array of vehicles meticulously curated to cater
            to your exacting requirements. Whether your itinerary involves urban
            exploration, family excursions, or corporate endeavors, we guarantee
            the ideal vehicle awaits you. Our fleet receives regular updates
            featuring the latest models, promising unparalleled comfort and
            enjoyment with every ride.
          </Paragraph>
        </Item>
        <Item>
          <CarImage src="./support.png" alt="" />
          <Heading as="h3">Outstanding Customer Support</Heading>
          <Paragraph>
            Your rental journey with us is underpinned by unparalleled support
            and service. From your initial inquiry to the conclusion of your
            rental period, our dedicated team remains at your beck and call.
            Whether you seek guidance with reservations or encounter queries
            during your rental tenure, our commitment to seamless assistance
            ensures your satisfaction at every turn.
          </Paragraph>
        </Item>
        <Item>
          <CarImage src="./support.png" alt="" />
          <Heading as="h3">Outstanding Customer Support</Heading>
          <Paragraph>
            We uphold a commitment to clarity and flexibility, setting the
            benchmark for straightforward pricing. Bid farewell to hidden costs
            and unexpected surprises with our competitive and transparent
            pricing structure. Our adaptable rental options are tailored to
            accommodate your schedule and budgetary constraints, affording you
            the convenience of stress-free car rentals.
          </Paragraph>
        </Item>
      </FlexContainer>
      <Line />
    </StyledHowWeWork>
  );
}

export default HowWeWork;
