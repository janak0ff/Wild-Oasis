import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import Input from "./ui/input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Row>
          <Row type="Horizontal">
            <div>
              <Heading as="h1">Hello World</Heading>

              <Heading as="h2">Click me</Heading>
              <Button onClick={() => alert("clicked 1")}>Click 1</Button>

              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("clicked 2")}
              >
                Click 2
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="text" placeholder="Enter your name" />
              <Input type="number" placeholder="Enter your age" />
            </form>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default App;
