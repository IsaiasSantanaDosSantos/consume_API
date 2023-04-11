import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as examplesActions from '../../store/modules/example/actions';

export default function Login() {
  const dispath = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispath(examplesActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title>
        Página de login
        <small>Oieee</small>
      </Title>
      <Paragrafo>
        Lorem ioosnm Nmanj Lorem Lorem lorem ipson Builds the app for production
      </Paragrafo>
      <br />
      <p>Olá pessoas ligeramente super merga hiper legais!</p>
      <br />
      <br />
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
