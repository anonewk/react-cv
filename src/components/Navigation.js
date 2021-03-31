import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/billGates.jpg" alt="profil-pic"/>
                    <h3>Jean Scratch</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"/>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='competence' activeClassName="navActive">
                            <i className="fas fa-mountain"/>
                            <span>Compétence</span>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='portfolio' activeClassName="navActive">
                            <i className="fas fa-images"/>
                            <span>Portfolio</span>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='contact' activeClassName="navActive">
                            <i className="fas fa-address-book"/>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"/>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-codepen"/>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <a href="https://github.com/anonewk" target="_blank" rel="noopener noreferrer">fromSratch - 2021</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
