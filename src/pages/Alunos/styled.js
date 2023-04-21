import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const HeadersBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  @media (max-width: 576px) {
    text-align: center;
  }
`;
export const AlunoContaneir = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }

  .iconsBloco {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 35px;
  }
  @media (max-width: 576px) {
    .nomeEmailBloco {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      row-gap: 10px;
      width: 100%;
      margin-left: 20px;
    }
    .iconsBloco {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 15px;
    }
  }
  @media (max-width: 500px) {
    div {
      flex-direction: column;
      align-items: center;
    }
    .nomeEmailBloco {
      justify-content: center;
      align-items: center;
      row-gap: 7px;
    }
    .iconsBloco {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      column-gap: 35px;
    }
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
  @media (max-width: 576px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const NovoAluno = styled(Link)`
  display: inline-block;
  width: auto;
  padding: 6px 25px;
  background-color: ${colors.primaryColor};
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  margin: auto 0;
  transition: all 600ms;
  font-size: 15px;
  white-space: nowrap;

  :hover {
    transform: scale(1.03);
  }
  :active {
    filter: brightness(75%);
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    width: 175px;
    margin-top: 15px;
  }
`;
