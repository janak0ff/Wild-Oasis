import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const H1 = styled.h1`
    color: red;
    font-size: 100px;
  `;

  const Button = styled.button`
    background-color: red;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 10px;
    padding: 10px 20px;
  `;

  const Input = styled.input`
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  `;

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
        <H1>Hello World</H1>
        <Button onClick={() => alert("clicked 1")}>Click 1</Button>
        <Button onClick={() => alert("clicked 2")}>Click 2</Button>
        <Input type="text" placeholder="Enter your name" />
      </Container>
    </>
  );
}

export default App;
