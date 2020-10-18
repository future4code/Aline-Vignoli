import React from 'react'
import './IconeSalvos.css'

export function IconeSalvos(props) {
	return <div className={'save-icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}