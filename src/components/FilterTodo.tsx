import { styled } from "styled-components";
import { TodoType } from "./Todo";
import { useState } from "react";

interface TodoTypeAdd extends TodoType {
  setLength: (length: number) => void;
  mode?: string;
}

const FilterTodo = ({
  setValue,
  value1,
  value2,
  setLength,
  mode,
}: TodoTypeAdd) => {
  const [activeColor, setActiveColor] = useState<
    "all" | "active" | "completed"
  >("all");

  const handleCompleted = () => {
    setValue(value1.filter((i) => i.checked));
    setActiveColor("completed");
  };

  const handleAll = () => {
    setValue(value1);
    setLength(value1.length);
    setActiveColor("all");
  };

  const handleActive = () => {
    setValue(value2.filter((i) => !i.checked));
    setActiveColor("active");
  };

  return (
    <Div backgroundColor={mode === "dark"}>
      <H2 color={activeColor === "all"} onClick={handleAll}>
        All
      </H2>
      <H2 color={activeColor === "active"} onClick={handleActive}>
        Active
      </H2>
      <H2 color={activeColor === "completed"} onClick={handleCompleted}>
        Completed
      </H2>
    </Div>
  );
};

export default FilterTodo;

const H2 = styled.h2<{ color: boolean }>`
  color: ${(props) => (props.color ? "#3A7CFD" : "#9495a5")};
`;

const Div = styled.div<{ backgroundColor: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.9rem;
  position: absolute;
  bottom: -6.5rem;
  background-color: ${(props) => (props.backgroundColor ? "#25273D" : "#fff")};
  padding: 1.5rem 8rem 1.9rem 8rem;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 0.5rem;
  h2 {
    font-size: 1.4rem;
    letter-spacing: -0.0194rem;
  }

  @media (min-width: 768px) {
    bottom: 2rem;
    padding: 0;
    left: 15rem;
    width: 40%;
    h2 {
      letter-spacing: -0.0194rem;
      cursor: pointer;
    }
    h2:hover {
      color: #494c6b;
    }
  }
`;
