import { styled } from "styled-components";
import cross from "../assets/cross.svg";
import FilterTodo from "./FilterTodo";
import TodoInfo from "./TodoInfo";
import { useEffect, useState } from "react";
import { FormInput } from "./Input";

export interface TodoType {
  value: {
    val: string;
    checked: boolean;
  }[];
  value1: {
    val: string;
    checked: boolean;
  }[];
  value2: {
    val: string;
    checked: boolean;
  }[];
  length?: number;
  setValue: (
    value: React.SetStateAction<
      {
        val: string;
        checked: boolean;
      }[]
    >
  ) => void;
  mode?: string;
}

interface AddFunction extends TodoType {
  setValue1: (
    value2: React.SetStateAction<
      {
        val: string;
        checked: boolean;
      }[]
    >
  ) => void;
  setValue2: (
    value2: React.SetStateAction<
      {
        val: string;
        checked: boolean;
      }[]
    >
  ) => void;
}

const Todo = ({
  value,
  value1,
  value2,
  setValue,
  setValue1,
  setValue2,
  mode,
}: AddFunction) => {
  const [length, setLength] = useState(0);

  useEffect(() => {
    setLength(value.length);
  }, [value]);

  const handleFilter = (index: number) => {
    setValue(value.filter((_, i) => i !== index));
    setLength(value.length);
  };

  const handleCheck = (index: number) => {
    const updatedValue = [...value];
    updatedValue[index].checked = !updatedValue[index].checked;
    setValue(updatedValue);
    setValue1(updatedValue);
    setValue2(updatedValue);
  };

  return (
    <Relative>
      {value.map((item, index) => (
        <Div backgroundColor={mode === "dark"} key={index}>
          <div>
            <FormInput
              backgroundColor={mode === "dark"}
              onChange={() => handleCheck(index)}
              checked={item.checked}
              type="checkbox"
            />
            <P dark={mode === "dark"} about={item.checked}>
              {item.val}
            </P>
          </div>
          <img
            onClick={() => handleFilter(index)}
            src={cross}
            alt="cross icon"
          />
        </Div>
      ))}
      <TodoInfo length={length} value={value} setValue={setValue} mode={mode} />
      <FilterTodo
        mode={mode}
        value={value}
        setValue={setValue}
        value1={value1}
        value2={value2}
        length={length}
        setLength={setLength}
      />
    </Relative>
  );
};

export default Todo;

const Relative = styled.div`
  position: relative;
`;

const Div = styled.div<{ backgroundColor: boolean }>`
  background-color: ${(props) => (props.backgroundColor ? "#25273D" : "#fff")};
  padding: 1.6rem 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: ${(props) =>
    props.backgroundColor
      ? "0.01rem solid #393A4B"
      : "0.01rem solid rgb(227, 228, 241)"};
  &,
  div {
    display: flex;
    align-items: center;
  }
  justify-content: space-between;
  div {
    gap: 1.2rem;
  }
  p {
    font-size: 1.2rem;
    letter-spacing: -0.0167rem;
  }
  img {
    max-width: 1.2rem;
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    padding: 2rem 2.4rem;
    p {
      font-size: 1.8rem;
      letter-spacing: -0.025rem;
    }
    div {
      gap: 2.4rem;
    }
    img {
      max-width: 1.8rem;
      cursor: pointer;
      display: none;
    }
    &:hover img {
      display: block;
    }
  }
`;

const P = styled.p<{ about: boolean; dark: boolean }>`
  color: ${(props) =>
    props.about
      ? props.dark
        ? "#494c6b"
        : "#D1D2DA"
      : props.dark
      ? "#C8CBE7"
      : "#4D5067"};
  text-decoration: ${(props) => (props.about ? "line-through" : "none")};
`;
