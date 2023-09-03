import { styled } from "styled-components";
import cross from "../assets/cross.svg";
import { useState } from "react";

export const Todo = ({ value }: { value: string[] }) => {
  const [check, setCheck] = useState<boolean[]>(value.map(() => false));
  const [remove, setRemove] = useState(value);

  const handleFilter = (index: number) => {
    setRemove(value);
    setRemove(remove.filter((rem, i) => i !== index));
  };

  const handleCheck = (index: number) => {
    const newCheck = [...check];
    newCheck[index] = !newCheck[index];
    setCheck(newCheck);
  };

  return value.map((val, index) => (
    <Div key={index}>
      <div>
        <input onClick={() => handleCheck(index)} type="checkbox" />
        <P about={check[index]}>{val}</P>
      </div>
      <img onClick={() => handleFilter(index)} src={cross} alt="cross icon" />
    </Div>
  ));
};

export default Todo;

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
