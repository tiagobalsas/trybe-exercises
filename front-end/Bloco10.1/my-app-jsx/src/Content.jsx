import { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

class Content extends Component {
  render() {
    return (
      <div>
        {conteudos.map((content) => (
          <div>
            <p>{`O conteúdo é: ${content.conteudo},`}</p>
            <p>{`status: ${content.status},`}</p>
            <p>{`bloco: ${content.bloco}`}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;
