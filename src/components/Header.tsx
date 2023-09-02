import moon from "../assets/moon.svg";
import logo from "../assets/logo-desk.svg";
import { styled } from "styled-components";
export const Header = () => {
  return (
    <HeaderContainer>
      <img className="firstImg" src={logo} alt="todo logo" />
      <img className="secondImg" src={moon} alt="moon icon" />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  .firstImg {
    max-width: 10.9rem;
    width: 100%;
    height: auto;
  }

  .secondImg {
    max-width: 1.9317rem;
  }
`;
