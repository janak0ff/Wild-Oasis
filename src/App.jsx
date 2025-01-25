import Styled from "styled-components"; // Import styled-components library

// Define a styled h1 element with red text color
const H1 = Styled.h1`
  color: red;
`;

// Define a styled button element with specific styles
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

// Define a styled input element with specific styles
const Input = Styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
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
    <StyledApp>
      <H1>Hello World!</H1>
      <Button onClick={() => alert("click in")}>Click in</Button>
      <Button onClick={() => alert("click out")}>Click out</Button>
      <Input type="text" placeholder="Enter your name" />
    </StyledApp>
  );
}

export default App; // Export the App component as the default export
