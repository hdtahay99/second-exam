import React from 'react';
import avatar from '../images/function.png'
import question from '../images/help-circle.svg';
import './styles/ContentView.css';

export const ContentViewItem = ({dataContent}) => {
    return (
        <>
            {
                dataContent.map((element, idx) => (
                    <div key={idx} className="content__card">
                        <div className="content__card-body">
                            <img className="content__card-img" src={avatar} alt="Logo element"/>
                            <h6>{element.title}</h6>
                            <span className="domain">{element.domain}</span>
                            <img className="domain__img" src={question} alt="Logo question"/>
                            <hr />
                            <div>
                                <ul className="content__card-list">
                                    {
                                        element.content.map((item,index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
