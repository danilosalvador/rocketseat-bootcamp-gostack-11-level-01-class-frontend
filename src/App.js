import React, { useState, useEffect } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';
import api from './services/api';

function App() {

  // useState retorna um array com 2 posições:
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor
  //

  const [projects , setProjects] = useState([]);

  // useEffect
  //
  // Disparar funções sempre que for alterada (ou não)
  // Recebe dois parâmetros:
  //
  // 1. Qual função para disparar
  // 2. Qual váriavel deve ser monitorada qdo alterada para ser disparada
  //    Se for vazia, irá ser dispara apenas uma vez.
  //

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Danilo"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Home" />
      <img width={300} src={backgroundImage}/>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title} ({project.owner})</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;