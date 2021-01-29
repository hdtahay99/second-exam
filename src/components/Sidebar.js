import React from 'react';
import avatar from '../images/avatar.png';
import './styles/Sidebar.css';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <div>
                    <h5 className="sidebar__title">4.900</h5>
                    <span className="sidebar__text">Puntos de nivel Dominado disponibles en este Curso</span>
                    <hr />
                </div>

                <div>
                    <h5 className="sidebar__title">Resumen del curso</h5>
                    <hr />

                    <ul className="sidebar__list">
                        <li>Números complejos
                            <ul>
                                <li>--</li>
                            </ul>
                        </li>
                        <li>Funciones compuestas
                            <ul>
                                <li>--</li>
                            </ul>
                        </li>
                        <li>Trigonometría
                            <ul>
                                <li>--</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cardd">
                    <h6>Desafío del curso</h6>
                    <p className="sidebar__text">Pon a prueba tu conocimiento de las habilidades en este curso</p>
                    <img className="card__image" src={avatar} alt="avatar" align="right"/>
                </div>
        </div>
    )
}
