import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {

	render() {
		return <div className={'share-container'}>
            <button value={'Instagram'} onClick={this.props.aoCompartilhar}>Instagram</button>
			<button value={'Facebook'} onClick={this.props.aoCompartilhar}>Facebook</button>
			<button value={'Twitter'} onClick={this.props.aoCompartilhar}>Twitter</button>
		</div>
	}
}