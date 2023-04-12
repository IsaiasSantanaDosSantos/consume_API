import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid #ddd;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
