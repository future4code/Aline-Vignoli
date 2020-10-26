import React from "react";

class PerguntaComSelecao extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <select
            value={this.props.value}
            onChange={this.props.onChange}
        >
            {this.props.opcoes.map((opcao, id) => (
                <option key={id} value={opcao}>{opcao}</option>
            ))}            
        </select>
      </div>
    );
  }
}

export default PerguntaComSelecao;