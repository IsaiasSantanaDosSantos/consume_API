import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-color: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
