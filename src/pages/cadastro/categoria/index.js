import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]); // se passa lista, tem que passar uma lista
  const [Values, setValues] = useState(valoresIniciais); // se passa texto, tem que passar texto

  // chave: nome, descricao, cor
  // valor: valor atribuido
  function setValue(chave, valor) {
    setValues(
      {
        ...Values,
        [chave]: valor,
      },
    );
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('alo alo w brasil');
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devkreflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {Values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar o form!')
        setCategorias([
          ...categorias,
          Values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={Values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={Values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={Values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
