import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]); //se passa lista, tem que passar uma lista
  const [Values, setValues] = useState(valoresIniciais); //se passa texto, tem que passar texto
  

  //chave: nome, descricao, cor
  //valor: valor atribuido
  function setValue( chave, valor ) {
    setValues(
      {
        ...Values,
        [chave]: valor,
      }
    )
  }

  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
    );
  }

  //desestruturação do array nomeDaCategoria
  //'Filmes' = valor inicial
  //nomeDaCategoria = valor armazenado do nome da categoria
  //setNomeDaCategoria = função que será utilizada para mudar a categoria

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {Values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault()
          //console.log('Você tentou enviar o form!')
          setCategorias([
            ...categorias,
            Values
          ]);

          setValues(valoresIniciais)
        }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={Values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
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
      
        <button>
          Cadastrar
        </button>
        </form>

        <ul>
          {categorias.map( (categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>


        <Link to="/">
          Ir para home
        </Link>

      </PageDefault>
    )
  }

  export default CadastroCategoria;