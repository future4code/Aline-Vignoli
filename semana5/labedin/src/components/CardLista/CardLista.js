import React from 'react';
import './CardLista.css';

function CardLista(props){
    return (
        <div className="listcard-container">
            <img src={props.imagem}/>
            <div>
                <h4>{props.nome}</h4>
            </div>
        </div>
    )
}

export default CardLista;