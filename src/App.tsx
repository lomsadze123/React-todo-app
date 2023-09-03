import { styled } from "styled-components";
import light from "./assets/desktop-light.jpg";
import dark from "./assets/desktop-dark.jpg";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <Body>
      <div>
        <Header />
        <Input />
      </div>
    </Body>
  );
}

export default App;

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 12rem 0 0 0;
  background: #fafafa url(${light}) no-repeat top center;
`;
