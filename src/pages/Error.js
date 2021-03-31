import React from 'react';
import {NavLink} from 'react-router-dom';

const Error = () => {
    return (
        <div className="notFound">
                <div className="notFoundContent">
                    <h3>Désolé cette page n'existe pas.</h3>
                    <NavLink exact to="/" activeClassName="navActive">
                        <i className="fas fa-home"/>
                        <span> Accueil</span>
                    </NavLink>
                </div>
        </div>
    );
};

export default Error;
