// @flow
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../app_context';
import { Link } from 'react-router-dom';
import './styles.scss';
import SignUp from '../pages/SignUp/SignUp';

type Props = {}

function NavBar(props: Props) {
    let appContext = useContext(AppContext);

    return <nav>
        <h1>{appContext.title}</h1>
        <div>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/">Home</Link>
        </div>
    </nav>
}

export default NavBar;