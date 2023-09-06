import { styled } from "styled-components";

interface InfoTypes {
  length: number;
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
  setValue: (
    value: React.SetStateAction<
      {
        val: string;
        checked: boolean;
      }[]
    >
  ) => void;
  setValue1: (
    value: React.SetStateAction<
      {
        val: string;
        checked: boolean;
      }[]
    >
  ) => void;
  setValue2: (
    value: React.SetStateAction<
      {
        val: string;
        checked: boolean;
      }[]
    >
  ) => void;
  mode?: string;
}

export const TodoInfo = ({
  length,
  value,
  setValue,
  mode,
  value1,
  value2,
  setValue1,
  setValue2,
}: InfoTypes) => {
  const handleRemove = () => {
    setValue(value.filter((i) => !i.checked));
    setValue1(value1.filter((i) => !i.checked));
    setValue2(value2.filter((i) => !i.checked));
  };

  return (
    <Div backgroundColor={mode === "dark"}>
      <H3 backgroundColor={mode === "dark"}>{length} items left</H3>
      <Button backgroundColor={mode === "dark"} onClick={handleRemove}>
        Clear Completed
      </Button>
    </Div>
  );
};

export default TodoInfo;

const H3 = styled.h3<{ backgroundColor: boolean }>`
  color: ${(props) => (props.backgroundColor ? "#5B5E7E" : "#9495a5")};
`;
const Button = styled.button<{ backgroundColor: boolean }>`
  color: ${(props) => (props.backgroundColor ? "#5B5E7E" : "#9495a5")};
`;

const Div = styled.div<{ backgroundColor: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.backgroundColor ? "#25273D" : "#fff")};
  padding: 1.6rem 2rem 2.2rem 2rem;
  border-radius: 0 0 0.5rem 0.5rem;
  h3,
  button {
    font-size: 1.2rem;
    letter-spacing: -0.0167rem;
  }
  button {
    background-color: transparent;
    border: 0;
  }

  @media (min-width: 768px) {
    h3,
    button {
      font-size: 1.4rem;
      letter-spacing: -0.0194rem;
    }
    button:hover {
      cursor: pointer;
      color: #494c6b;
    }
  }
`;
