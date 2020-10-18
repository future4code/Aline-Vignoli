import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorInputComentario: '',
	}

	onChangeComentario = (event)=>{
		this.setState({
			valorInputComentario: event.target.value
		})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={()=>this.props.aoEnviar(this.state.valorInputComentario)}>Enviar</button>
		</div>
	}
}
