import { styled } from "styled-components";
import check from "../assets/check.svg";
import Todo from "./Todo";
import { useState } from "react";

export const Input = ({ mode }: { mode: string }) => {
  const [value, setValue] = useState<{ val: string; checked: boolean }[]>([]);
  const [value1, setValue1] = useState<{ val: string; checked: boolean }[]>([]);
  const [value2, setValue2] = useState<{ val: string; checked: boolean }[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleValue = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo !== "") {
      setValue([{ val: todo, checked: false }, ...value]);
      setValue1([{ val: todo, checked: false }, ...value]);
      setValue2([{ val: todo, checked: false }, ...value]);
    }
    setTodo("");
  };

  return (
    <Form>
      <DarkForm about={mode === "dark"} onSubmit={handleValue}>
        <FormInput backgroundColor={mode === "dark"} type="checkbox" disabled />
        <InputTag
          about={mode === "dark"}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Create a new todo…"
        />
      </DarkForm>
      <Article about={mode === "dark"}>
        <Todo
          mode={mode}
          value={value}
          value1={value1}
          value2={value2}
          setValue={setValue}
          setValue1={setValue1}
          setValue2={setValue2}
        />
      </Article>
      {/* <H4 about={mode === "dark"}>Drag and drop to reorder list</H4> */}
    </Form>
  );
};

export default Input;

const DarkForm = styled.form<{ about: boolean }>`
  background-color: ${(props) => (props.about ? "#25273D" : "white")};
`;
const Article = styled.article<{ about: boolean }>`
  box-shadow: ${(props) =>
    props.about
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.50);"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
`;
const InputTag = styled.input<{ about: boolean }>`
  background-color: ${(props) => (props.about ? "#25273D" : "white")};
  color: ${(props) => (props.about ? "#C8CBE7" : "#393A4B")};
`;
// const H4 = styled.h4<{ about: boolean }>`
//   color: ${(props) => (props.about ? "#5B5E7E" : "#9495a5")};
// `;
export const FormInput = styled.input<{ backgroundColor: boolean }>`
  border: ${(props) =>
    props.backgroundColor ? ".1rem solid #393A4B" : ""} !important;
`;

const Form = styled.div`
  max-width: 33rem;
  form {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin: 6rem 0 1.6rem 0;
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
  h4 {
    margin-top: 10rem;
    text-align: center;
    font-size: 1.4rem;
    letter-spacing: -0.0194rem;
  }

  @media (min-width: 768px) {
    max-width: 54rem;
    input {
      font-size: 1.8rem;
      letter-spacing: -0.025rem;
    }
    form {
      padding: 2rem 28.3rem 2rem 2.4rem;
      gap: 2.4rem;
    }
    input[type="checkbox"]:not(form input[type="checkbox"]) {
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
    }
    input[type="checkbox"]:checked::after {
      width: 2.3rem;
      height: 2.3rem;
    }
    form input[type="checkbox"] {
      height: 2.4rem;
      width: 2.9rem;
    }
    h4 {
      margin-top: 5rem;
      letter-spacing: -0.0194rem;
    }
  }
`;
