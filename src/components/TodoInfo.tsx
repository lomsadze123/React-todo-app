import { styled } from "styled-components";

export const TodoInfo = () => {
  return (
    <Div>
      <h3>5 items left</h3>
      <button>Clear Completed</button>
    </Div>
  );
};

export default TodoInfo;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 1.6rem 2rem 2.2rem 2rem;
  border-radius: 0 0 0.5rem 0.5rem;
  h3,
  button {
    color: #9495a5;
    font-size: 1.2rem;
    letter-spacing: -0.0167rem;
  }
  button {
    background-color: transparent;
    border: 0;
  }
`;
