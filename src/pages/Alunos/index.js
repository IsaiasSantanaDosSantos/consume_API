import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaTrashRestoreAlt, FaTrash } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContaneir, ProfilePicture, NovoAluno } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const hendleDeleteAsk = (e) => {
    e.preventDefault();
    const deleteConfirm = e.currentTarget.nextSibling;
    deleteConfirm.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const hendleDelete = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa estar logado!');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno!');
      }
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <NovoAluno to="/aluno/">Cadastrar aluno</NovoAluno>
      <AlunoContaneir>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img crossOrigin="" src={aluno.Fotos[0].url} alt="Image" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link onClick={hendleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaTrash size={16} />
            </Link>
            <FaTrashRestoreAlt
              onClick={(e) => hendleDelete(e, aluno.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </AlunoContaneir>
    </Container>
  );
}
