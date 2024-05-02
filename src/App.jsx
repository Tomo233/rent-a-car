import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const Title = styled.h1`
  color: red;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Title>Title</Title>
      </div>
    </>
  );
}

export default App;
