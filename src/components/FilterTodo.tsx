import { useState } from "react";
import { styled } from "styled-components";
import { TodoType } from "./Todo";

export const FilterTodo = ({ value, setValue }: TodoType) => {
  // const [all,setAll] = useState(0);
  // const [active,setActive] = useState(0);
  // const [Completed,setCompleted] = useState(0);
  const [state, setState] = useState(value);

  const handleCompleted = () => {
    setState(value);
  };

  const handleAll = () => {
    setValue(state);
    console.log(state);
  };

  const handleActive = () => {
    // const newValue = value.filter((_, index) => !check[index]);
  };

  return (
    <Div>
      <h2 onClick={handleAll}>All</h2>
      <h2 onClick={handleActive}>Active</h2>
      <h2 onClick={handleCompleted}>Completed</h2>
    </Div>
  );
};

export default FilterTodo;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.9rem;
  position: absolute;
  bottom: -12rem;
  background-color: #fff;
  padding: 1.5rem 8rem 1.9rem 8rem;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 0.5rem;
  h2 {
    color: #9495a5;
    font-size: 1.4rem;
    letter-spacing: -0.0194rem;
  }
`;
