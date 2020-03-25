import React from "react";

/*
//componente Stateless
const Bemvindo = props => {
  return (
    <div>
      <h3>Stateless component {props.nome}</h3>
      <h3>Stateless component {props.anos}</h3>
    </div>
  );
};
*/
const Equipe = (props) => {
  return (
    <div>
     <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}></Sobre>
    </div>
  );
};

const Sobre = (props) => {
  return (
    <div>
      <h3>Meu nome é: {props.nome} </h3>
      <h2>Eu sou:  {props.cargo}</h2>
      <h2>E tenho :  {props.idade}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Eder" cargo="Pesquisador" idade="29"></Equipe>
      {/* <h1>Hello World</h1>
      <h2>Curso React</h2>
      <Bemvindo nome="Eder" anos="18" /> */}
    </div>
  );
}

export default App;
