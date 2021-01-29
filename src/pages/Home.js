import React from 'react';
import {Navbar} from '../components/Navbar';
import {Sidebar} from '../components/Sidebar';
import {ContentView} from '../components/ContentView';
import './styles/Global.css';

export const Home = () => {
    return (
        <>
            <Navbar course='Matemáticas' title='Precálculo' />
            <div className="Body__color">
                <Sidebar />
                <ContentView />
            </div>            
        </>
    )
}
