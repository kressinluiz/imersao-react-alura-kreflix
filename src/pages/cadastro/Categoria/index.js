import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        console.log(categoriasFromServer);
        setCategorias(categoriasFromServer);
      });
  }, []);
  /* {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devsoutinhoflix.herokuapp.com/categorias';
    // E a ju ama variáveis
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  } */

  function handleEdit(id) {
    console.log('Tentou editar', id);
  }

  function handleDelete(e) {
    console.log(e.titulo);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        categoriasRepository.create({
          titulo: values.nome,
          cor: values.cor,
          link_extra: {
            text: values.descricao,
          },
        });
        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button as="button" type="submit">
          Cadastrar Categoria
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <h1>
        Lista de Categorias
      </h1>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
            <Button onClick={() => handleEdit(categoria)}>Editar</Button>
            <Button onClick={() => handleDelete(categoria)}>Deletar</Button>
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
