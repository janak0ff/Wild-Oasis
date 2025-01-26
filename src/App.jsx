import Styled from "styled-components"; // Import styled-components library
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";

// Define a styled h1 element with red text color
const H1 = Styled.h1`
  color: red;
`;

// Define a styled div element to serve as the container for the app
const StyledApp = Styled.div`
  background-color: #925a5a;
  padding: 20px;
  text-align: center;
`;

// Define the main App component
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <H1>Hello World!</H1>
        <Button onClick={() => alert("click in")}>Click in</Button>
        <Button onClick={() => alert("click out")}>Click out</Button>
        <Input type="text" placeholder="Enter your name" />
      </StyledApp>
    </>
  );
}

export default App; // Export the App component as the default export
