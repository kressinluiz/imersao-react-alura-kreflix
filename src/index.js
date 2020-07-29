import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria';

// Os paths encaminhados que não corresponderem a nenhuma rota, serão direcionados ao component indicado pela rota sem path.

//desafio master blaster na descrição 
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
     <Route path="/" component={home} exact />
     <Route path="/cadastro/video" component={CadastroVideo} /> 
     <Route path="/cadastro/categoria" component={CadastroCategoria} /> 
     <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);