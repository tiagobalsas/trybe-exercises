import { Component } from 'react';

const Task = (value) => {
  return <li key={value}> {value} </li>;
};

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {tarefas.map(tarefa => Task(tarefa))}
        </ul>
      </div>
    );
  }
}

export default App;
