import Cards from "./Cards";
import Heading from "./Heading";
import Span from "./Span";
import Line from "./Line";
import Flex from "./Flex";

function MostAskedQuestions() {
  return (
    <section>
      <Line />
      <Heading as="h2">
        Most Asked <Span>Question</Span>
      </Heading>
      <Flex $justify="center">
        <Cards />
      </Flex>
    </section>
  );
}

export default MostAskedQuestions;
