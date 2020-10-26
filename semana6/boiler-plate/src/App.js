import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const TarefaContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 5px;
  gap: 5px;
` 

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      editando: false,
      inputEdicaoValue: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefaString = localStorage.getItem("tarefas")
    const tarefaObjeto = JSON.parse(tarefaString)

    if (tarefaObjeto){
      this.setState({
        tarefas: tarefaObjeto
      })
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novoArrayTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: novoArrayTarefas})
    this.setState( {inputValue: ''})
  }

  apagarTarefa = (id) => {
    const listaAtualizada = this.state.tarefas.filter((tarefa) => {
      return tarefa.id !== id
    })

    this.setState({tarefas: listaAtualizada})
  }

  editarTarefa = (id) => {
    //Funcao esta incompleta, por enquanto apenas mostrando e escondendo o input editar
    this.setState({editando: !this.state.editando})
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if ( id === tarefa.id ){
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      }else {
        return tarefa
      }
    })

    this.setState({tarefas: novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  apagarTodas = () => {
    this.setState({tarefas: []})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <TarefaContainer>
                <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                
              </Tarefa>
              <button onClick={() => this.apagarTarefa(tarefa.id)}>Apagar</button>
              <button onClick={() => this.editarTarefa(tarefa.id)}>Editar</button>
              </TarefaContainer>
            )
          })}
          {this.state.editando && <input value={this.state.inputEdicaoValue}/>}
        </TarefaList>
        {this.state.tarefas.length!==0 && <button onClick={this.apagarTodas}>Apagar todas</button>}
      </div>
    )
  }
}

export default App
