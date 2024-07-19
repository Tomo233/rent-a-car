import styled from "styled-components";
import Cards from "./Cards";
import FlexContainer from "./FlexContainer";
import Heading from "./Heading";
import Span from "./Span";
import Line from "./Line";

const ResponsiveFlexContainer = styled(FlexContainer)`
  justify-content: center;
`;

function MostAskedQuestions() {
  return (
    <section>
      <Line />
      <Heading as="h2">
        Most Asked <Span>Question</Span>
      </Heading>
      <ResponsiveFlexContainer>
        <Cards />
      </ResponsiveFlexContainer>
    </section>
  );
}

export default MostAskedQuestions;
