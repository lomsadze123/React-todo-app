import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import logo from "../assets/logo-desk.svg";
import { styled } from "styled-components";
export const Header = ({
  handleChange,
  mode,
}: {
  handleChange: () => void;
  mode: string;
}) => {
  return (
    <HeaderContainer>
      <img className="firstImg" src={logo} alt="todo logo" />
      <img
        onClick={handleChange}
        className="secondImg"
        src={mode === "light" ? moon : sun}
        alt="moon icon"
      />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .firstImg {
    max-width: 10.9rem;
    width: 100%;
    height: auto;
  }

  .secondImg {
    max-width: 1.9317rem;
  }

  @media (min-width: 768px) {
    .firstImg {
      max-width: 16.7rem;
    }
    .secondImg {
      max-width: 2.5113rem;
      cursor: pointer;
    }
  }
`;
