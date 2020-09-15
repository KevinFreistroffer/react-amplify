// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {}

function NavBar(props: Props) {
    return <nav>
        <h1>Title</h1>
        <div>
            <Link to="/view1">View1</Link>
            <Link to="/">Home</Link>
        </div>
    </nav>
}

export default NavBar;