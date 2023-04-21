import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .navContainer {
    max-width: 785px;
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

    .linkName {
      margin: 0;
      font-weight: normal;
    }
  }
  a:hover {
    color: ${primaryDarkColor};
  }
  span {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-left: 40px;
  }
  @media (max-width: 700px) {
    a {
      .linkName {
        display: none;
      }
    }
  }

  @media (max-width: 576px) {
    .navContainer {
      justify-content: center;
    }
  }
`;
