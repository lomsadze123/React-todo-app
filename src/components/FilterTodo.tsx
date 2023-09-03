import { styled } from "styled-components";

export const FilterTodo = () => {
  return (
    <Div>
      <h2>All</h2>
      <h2>Active</h2>
      <h2>Completed</h2>
    </Div>
  );
};

export default FilterTodo;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.9rem;
  position: absolute;
  bottom: -6.5rem;
  right: 0;
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
