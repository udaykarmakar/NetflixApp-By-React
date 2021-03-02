import React from 'react';
import './Card.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Card(props){
    return(
        <div id="cards">
            <div id="card">
                <img src={props.imgSrc} alt='image' className="card__img"/>
                <div className="card__info">
                    <span className="card__category"> Netflix Original Series </span>
                    <h3 className="card__title"> {props.title} </h3>
                    <a href={props.link} target="_blank">
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Card;