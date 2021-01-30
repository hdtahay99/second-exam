import React from 'react';
import avatar from '../images/avatar.png';

export const CardHover = () => {
    return (
        <>
            <h6>Desafío del curso</h6>
            <p className="sidebar__text">Pon a prueba tu conocimiento de las habilidades en este curso</p>
            <img className="card__image" src={avatar} alt="avatar" align="right"/>  
        </>
    )
}
