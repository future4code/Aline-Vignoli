import React from 'react';
import ListaMensagens from './ListaMensagens';
import styled from 'styled-components';

export default class FormularioMensagem extends React.Component {

    state = {
        mensagens: [],
        valorInputUsuario: "",
        valorInputMensagem: ""
    }

    onChangeInputUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value})
    }

    onChangeInputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    }

    enviarMensagem = () => {
        const mensagem = {
            usuario: this.state.valorInputUsuario,
            texto: this.state.valorInputMensagem
        }

        const novoArrayMensagens = [...this.state.mensagens, mensagem]
        this.setState({mensagens: novoArrayMensagens})
        this.setState({valorInputMensagem: ""})
    }

    //Estilizacao
    InputContainer = styled.div`
        height: 30px;
        display: flex;
    `

    InputUsuario = styled.input`
        width: 18%;
    `

    InputMensagem = styled.input`
        flex-grow: 1
    `

    BotaoEnviar = styled.button`
        background-color: #FF8C00;
        color: #FFF; 
    `

    render(){

        const listaDeMensagens = this.state.mensagens.map((mensagem, id)=> {
            return <ListaMensagens 
            key={id} 
            usuario={mensagem.usuario} 
            mensagem={mensagem.texto}
            />
        })

        return(
            <div>
                {listaDeMensagens}

                <this.InputContainer>                
                    <this.InputUsuario
                    value={this.state.valorInputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder="Usuário"
                    />
                    <this.InputMensagem
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder="Mensagem"
                    />
                    <this.BotaoEnviar onClick={this.enviarMensagem}>Enviar</this.BotaoEnviar>
                </this.InputContainer>
            </div>
        )
    }
}