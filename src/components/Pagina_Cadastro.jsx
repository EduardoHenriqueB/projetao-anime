import React from "react";
import styles from '../styles/PaginaCadastroCss.css';
import luffyDeCadastro from '../images/luffyDeCadastro.png'

function Pagina_Cadastro() {
  return (
    <>
      <div id='fundo'>
        <div id='formulario'>
          <label>NOME</label>
          <input type="text" />
          <label>EMAIL</label>
          <input type="email" />
          <label>SENHA</label>
          <input type="password" />
          <label>REPETIR SENHA</label>
          <input type="password" />
          <button>Cadastrar</button>
        </div>
        <img src={luffyDeCadastro} alt="luffy" id="imagem"/>
      </div>
    </>
  );
}

export default Pagina_Cadastro;
