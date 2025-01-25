import Styled from "styled-components";

const H1 = Styled.h1`
  color: red;
`;

const Button = Styled.button`
  font-size: 1.3em;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = Styled.input`
border: 1px solid #000;
border-radius: 5px;
padding: 10px;
`;

const StyledApp = Styled.div`
  background-color: #925a5a;
  padding: 20px;
  text-align: center;
`;

function App() {
  return (
    <StyledApp>
      <H1>Styled Components</H1>
      <Button onClick={() => alert("click in")}>Click in</Button>
      <Button onClick={() => alert("click out")}>Click out</Button>
      <Input type="text" placeholder="Enter your name" />
    </StyledApp>
  );
}

export default App;
