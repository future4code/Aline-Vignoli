import React from 'react';
import './CardCursos.css';

function CardCursos(props){
    return (
        <div className="coursescard-container">
            <img src={props.imagem}/>
            <div>
                <h4>{props.instituicao}</h4>
                <p>{props.descricao}</p>
                <p className="periodo">{props.periodo}</p>
            </div>
        </div>
    )
}

export default CardCursos;