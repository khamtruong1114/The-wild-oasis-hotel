import styled from "styled-components";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;
const Input = styled.input`
  border: 1px solid #ddd;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
`;
const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button>Check in</Button>
      <Button>Check in</Button>

      <Input type="number" placeholder="Number of guests"></Input>
      <Input type="number" placeholder="Number of guests"></Input>
    </StyledApp>
  );
}

export default App;
