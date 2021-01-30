import React from 'react';
import {CardHover} from './CardHover';
import './styles/Sidebar.css';

export const Sidebar = ({score}) => {

    const dataSidebar = [
        {
            'topic'       : 'Números complejos',
            'description' : '--'
        },
        {
            'topic'       : 'Funciones compuestas',
            'description' : '--'
        },
        {
            'topic'       : 'Trigonometría',
            'description' : '--'
        },
        {
            'topic'       : 'Estadística',
            'description' : '--'
        }
    ]

    return (
        <div className="sidebar">
            <div className="container">
                <div>
                    <h5 className="sidebar__title">{score}</h5>
                    <span className="sidebar__text">Puntos de nivel Dominado disponibles en este Curso</span>
                    <hr />
                </div>

                <div>
                    <h5 className="sidebar__title">Resumen del curso</h5>
                    <hr />

                    <ul className="sidebar__list">
                        {
                            dataSidebar.map((item, idx) => (
                                <li key={idx}>
                                    {item.topic}
                                    <ul className="decoration">
                                        <li>{item.description}</li>
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="cardd">
                <CardHover />
            </div>
        </div>
    )
}
