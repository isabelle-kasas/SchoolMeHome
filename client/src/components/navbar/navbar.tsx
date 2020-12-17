import React from "react";
import "./navbar.css";
import { FaUser, FaSignOutAlt, FaBook } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import avatar from '../../image/unnamed.gif';
import { Link, NavLink } from "react-router-dom";


export function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="avatar">
            <div className='avatar-div'>
              <img src={avatar} alt="avatar" className="avatarImg"/>
              <div className="avatarName">
                <h1>John&nbsp;Doe</h1>
                <div className="avatarStudy">
                  <p>Master&nbsp;1</p>
                <p>Développement&nbsp;web</p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link" activeClassName="active">
              <MdDashboard size={30}/>
              <span className="link-text">Mon&nbsp;dashboard</span>
            </NavLink>
            </li>
          <li className="nav-item">
            <NavLink to="/profil" className="nav-link" activeClassName="active">
              <FaUser size={30}/>
              <span className="link-text">Mon&nbsp;profil</span>
            </NavLink>
          </li >
            <li className="nav-item">
              <NavLink to="/cours" className="nav-link" activeClassName="active">
              <FaBook size={30}/>
              <span className="link-text">Mes&nbsp;cours</span>
            </NavLink>
            </li>
            <li className="nav-item">
               <a href="/" className="nav-link">
              <FaSignOutAlt size={30}/>
              <span className="link-text">Se&nbsp;déconnecter</span>
            </a>
            </li>
           
          
        </ul>
        
      </nav>
    );
  }
  
