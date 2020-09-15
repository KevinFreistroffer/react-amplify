// @flow
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../app_context';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {}

function NavBar(props: Props) {
    let appContext = useContext(AppContext);

    return <nav>
        <h1>{appContext.title}</h1>
        <button onClick={() => {
            appContext.setTitle('My New Title');
        }}>Set New Title</button>
        <div>
            <Link to="/view1">View1</Link>
            <Link to="/">Home</Link>
        </div>
    </nav>
}

export default NavBar;