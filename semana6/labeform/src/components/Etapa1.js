import React from "react";
import PerguntaAberta from './PerguntaAberta';
import PerguntaComSelecao from "./PerguntaComSelecao";

class Etapa1 extends React.Component {

    state = {
        opcaoSelecionada: "Ensino médio incompleto",
    }

    render() {
        const opcoes = [
            "Ensino médio incompleto", 
            "Ensino médio completo", 
            "Ensino superior incompleto", 
            "Ensino superior completo"
        ]

        return (    
        <div>
            <h3>ETAPA 1 - DADOS GERAIS:</h3>
            <PerguntaAberta pergunta={'1. Qual o seu nome?'}/>
            <PerguntaAberta pergunta={'2. Qual sua idade?'}/>
            <PerguntaAberta pergunta={'3. Qual seu e-mail?'}/>
            <PerguntaComSelecao 
            pergunta={'4. Qual a sua escolaridade?'}
            onChange={e =>
                this.setState({ opcaoSelecionada: e.target.value })
            }
            opcoes={opcoes}/>
        </div>
        );
    }
}

export default Etapa1;