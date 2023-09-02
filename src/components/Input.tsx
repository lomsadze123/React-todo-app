import { styled } from "styled-components";
import check from "../assets/check.svg";

export const Input = () => {
  return (
    <Form>
      <input className="checkbox" type="checkbox" />
      <input type="text" />
    </Form>
  );
};

export default Input;

const Form = styled.form`
  display: flex;
  gap: 1.2rem;
  margin: 4rem 0 1.6rem 0;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.4rem 0 1.4rem 2rem;
  input {
    border: 0;
    outline: 0;
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: -0.017rem;
  }
  .checkbox {
    appearance: none;
    border-radius: 50%;
    border: 0.01rem solid silver;
    height: 2rem;
    width: 2rem;
  }
  .checkbox:checked::after {
    content: "";
    display: block;
    width: 1.9rem;
    height: 1.9rem;
    background: url(${check}) no-repeat center;
  }
  .checkbox:checked {
    background-image: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  }
`;
