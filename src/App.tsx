import { styled } from "styled-components";
import light from "./assets/desktop-light.jpg";
import dark from "./assets/desktop-dark.jpg";
import Header from "./components/Header";
import Input from "./components/Input";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const local = localStorage.getItem("mode");

  if (local === null) {
    localStorage.setItem("mode", "light");
  }

  useEffect(() => {
    local && setMode(local);
  }, []);

  const handleChange = () => {
    if (local === "light") {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  };

  return (
    <Body about={mode === "dark"}>
      <div>
        <Header handleChange={handleChange} mode={mode} />
        <Input mode={mode} />
      </div>
    </Body>
  );
}

export default App;

const Body = styled.div<{ about: boolean }>`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 12rem 0 0 0;
  background: ${(props) =>
    `${props.about ? "#171823" : "#fafafa"}  url(${
      props.about ? dark : light
    }) no-repeat top center`};
`;
