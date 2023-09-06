import styled from "styled-components";
import "./App.css";
import { Button } from "@hexure/ui";

const SButton = styled(Button)`
  background: red;
`;

function App() {
  return (
    <div className="App">
      <Button>Hexure button</Button>
      <SButton>Extended Hexure button</SButton>
    </div>
  );
}

export default App;
