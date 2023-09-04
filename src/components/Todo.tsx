import { styled } from "styled-components";
import cross from "../assets/cross.svg";
import FilterTodo from "./FilterTodo";

export interface TodoType {
  value: {
    val: string;
    checked: boolean;
  }[];
  setValue: (
    value: React.SetStateAction<
      {
        val: string;
        checked: boolean;
      }[]
    >
  ) => void;
}

const Todo = ({ value, setValue }: TodoType) => {
  const handleFilter = (index: number) => {
    setValue(value.filter((_, i) => i !== index));
  };

  const handleCheck = (index: number) => {
    const updatedValue = [...value];
    updatedValue[index].checked = !updatedValue[index].checked;
    setValue(updatedValue);
  };

  return (
    <Relative>
      {value.map((item, index) => (
        <Div key={index}>
          <div>
            <input
              onClick={() => handleCheck(index)}
              checked={item.checked}
              type="checkbox"
            />
            <P about={item.checked}>{item.val}</P>
          </div>
          <img
            onClick={() => handleFilter(index)}
            src={cross}
            alt="cross icon"
          />
        </Div>
      ))}
      <FilterTodo value={value} setValue={setValue} />
    </Relative>
  );
};

export default Todo;

const Relative = styled.div`
  position: relative;
`;

const Div = styled.div`
  background-color: #fff;
  padding: 1.6rem 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: 0.01rem solid rgb(227, 228, 241);
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
`;

const P = styled.p<{ about: boolean }>`
  color: ${(props) => (props.about ? "#D1D2DA" : "#494c6b")};
  text-decoration: ${(props) => (props.about ? "line-through" : "none")};
`;
