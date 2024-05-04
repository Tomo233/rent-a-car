import styled from "styled-components";
import Button from "./Button";
import Cards from "./Cards";
import FlexContainer from "./FlexContainer";
import Heading from "./Heading";
import Span from "./Span";
import Overlay from "./Overlay";
import Line from "./Line";

const StyledQuestions = styled.section`
  margin-bottom: 300px;
`;

const Image = styled.img`
  width: 350px;
  display: block;
`;

const Box = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
`;

function MostAskedQuestions() {
  return (
    <StyledQuestions>
      <Line />
      <Heading as="h2">
        Most Asked <Span>Question</Span>
      </Heading>
      <FlexContainer>
        <Cards />
        <Box>
          <Overlay />
          <Image src="./keys.jpg" alt="" />
          <Content>
            <Heading as="h3" color="white" style={{ marginBottom: "15px" }}>
              Do you have questions?
            </Heading>
            <Button type="secondary">Ask a question</Button>
          </Content>
        </Box>
      </FlexContainer>
    </StyledQuestions>
  );
}

export default MostAskedQuestions;
