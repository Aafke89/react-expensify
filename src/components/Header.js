import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        </div>
    </header>
);

export default Header; 