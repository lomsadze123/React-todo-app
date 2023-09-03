import { styled } from "styled-components";
import check from "../assets/check.svg";
import TodoInfo from "./TodoInfo";
import Todo from "./Todo";
import FilterTodo from "./FilterTodo";
import { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleValue = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue([...value, todo]);
    setTodo("");
  };

  return (
    <Form>
      <form onSubmit={handleValue}>
        <input type="checkbox" />
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Create a new todo…"
        />
      </form>
      <article>
        <Todo value={value} />
        <TodoInfo>
          <FilterTodo />
        </TodoInfo>
      </article>
    </Form>
  );
};

export default Input;

const Form = styled.div`
  max-width: 33rem;
  form {
    display: flex;
    gap: 1.2rem;
    margin: 6rem 0 1.6rem 0;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.4rem 14rem 1.4rem 2rem;
  }
  input[type="text"] {
    width: 100%;
  }
  input {
    border: 0;
    outline: 0;
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: -0.017rem;
  }
  input[type="checkbox"] {
    appearance: none;
    border-radius: 50%;
    border: 0.01rem solid silver;
    height: 2rem;
    width: 2rem;
  }
  input[type="checkbox"]:checked::after {
    content: "";
    display: block;
    width: 1.9rem;
    height: 1.9rem;
    background: url(${check}) no-repeat center;
  }
  input[type="checkbox"]:checked {
    background-image: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  }
  form input[type="checkbox"] {
    height: 2rem;
    width: 2.3rem;
  }
  article {
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  }
`;
