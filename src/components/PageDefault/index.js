import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-top: 5%;
`;

//tag vazia = fragment
//possível preencher com React.Fragment

function PageDefault(props) {
    return (
      <>
          <Menu />
            <Main>
                {props.children}
            </Main>
          <Footer />
      </>  
    );
}

export default PageDefault;