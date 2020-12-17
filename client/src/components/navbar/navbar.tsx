import React from "react";
import "./navbar.css";
import { FaUser, FaSignOutAlt, FaBook } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import avatar from '../../image/profil.png';


export function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="avatar">
            <div className='nav-link'>
              <img src={avatar} alt="avatar" className="avatarImg"/>
              <div className="avatarName">
                <h1>John Doe</h1>
                <div className="avatarStudy">
                  <p>Master 1</p>
                <p>Développement&nbsp;web</p>
                </div>
              </div>
            </div>
            
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <MdDashboard size={30}/>
              <span className="link-text">Mon&nbsp;dashboard</span>
            </a>
            </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <FaUser size={30}/>
              <span className="link-text">Mon&nbsp;profil</span>
            </a>
          </li >
            <li className="nav-item">
              <a href="/" className="nav-link">
              <FaBook size={30}/>
              <span className="link-text">Mes&nbsp;cours</span>
            </a>
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
  
