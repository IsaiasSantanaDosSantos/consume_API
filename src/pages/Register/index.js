import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Campo nome deve entre de 3 a 255 caracteres!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido!');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Campo senha deve ter entre 6 a 50 caracteres!');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        nome,
        password,
        email,
      });

      toast.success('Cadastaro realizado com sucesso!');
      history.push('/login');
    } catch (e) {
      // const status = get(e, 'response.status', 0);
      const errors = get(e, 'response.data.erros', []);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome..."
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail..."
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha..."
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
