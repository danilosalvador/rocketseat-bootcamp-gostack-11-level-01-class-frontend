import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {

  // useState retorna um array com 2 posições:
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor
  //

  const [projects , setProjects] = useState([ 
    'Desenvolvimento de Backend',
    'Desenvolvimento de Frontend',
    'Desenvolvimento de Mobile'
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Home" />
      <img width={300} src={backgroundImage}/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;