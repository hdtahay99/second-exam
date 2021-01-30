import React from 'react'
import {ContentViewItem} from './ContentViewItem';

export const ContentView = () => {

    const dataContent = [
        {
            'title'   : 'Funciones compuestas',
            'domain'  : 'Dominio no disponible',
            'image'   : '../images/function.png',
            'content' : [
                'Composición de funciones',
                'Modelar con composición de funciones',
                'Comprobar funciones inversas por composición',
                'Funciones invertibles'
            ]
        },
        {
            'title'   : 'Trigonometría',
            'domain'  : 'Dominio no disponible',
            'image'   : '../images/trigonometry.png',
            'content' : [
                'Funciones trigonométricas inversas',
                'Ecuaciones sinusoidales',
                'Modelos sinusoidales',
                'Identidades trigonométricas',
                'Identidades de suma de ángulos',
                'Usar identidades trigonométricas'
            ]
        },
        {
            'title'   : 'Vectores',
            'domain'  : 'Dominio no disponible',
            'image'   : '../images/vectors.png',
            'content' : [
                'Introducción a vectores',
                'Magnitud de los vectores',
                'Multiplicación escalar',
                'Vectores unitarios',
                'Forma de magnitud y dirección de los vectores',
                'Forma de componentes de los vectores'
            ]
        },
    ];


    return (
        <div className="content">
            <br/><br/><br/>
            <ContentViewItem dataContent={dataContent} />
        </div>
    )
}
