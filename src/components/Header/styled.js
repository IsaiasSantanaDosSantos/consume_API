import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .navContainer {
    max-width: 1000px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  a {
    color: #fff;
    margin-left: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    transition: 0.5s;
  }
  a:hover {
    color: ${primaryDarkColor};
  }
`;
