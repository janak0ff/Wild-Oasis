import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import Input from "./ui/input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

function App() {
  const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-brand-100);
  `;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading as="h1">Hello World</Heading>

        <Heading as="h2">Click me</Heading>
        <Button onClick={() => alert("clicked 1")}>Click 1</Button>
        <Button onClick={() => alert("clicked 2")}>Click 2</Button>

        <Heading as="h3">Form</Heading>
        <Input type="text" placeholder="Enter your name" />
        <Input type="number" placeholder="Enter your age" />
      </Container>
    </>
  );
}

export default App;
