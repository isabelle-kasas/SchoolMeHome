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
            <img src={avatar} alt="avatar" className="avatarImg"/>
            <div className="avatarName">John Doe</div>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <MdDashboard className="fa-primary"/>
              <span className="link-text">Mon dashboard</span>
            </a>
            </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <FaUser className="fa-primary"/>
              <span className="link-text">Mon profil</span>
            </a>
          </li >
            <li className="nav-item">
              <a href="/" className="nav-link">
              <FaBook className="fa-primary"/>
              <span className="link-text">Mes cours</span>
            </a>
            </li>
            <li className="nav-item">
               <a href="/" className="nav-link">
              <FaSignOutAlt className="fa-primary"/>
              <span className="link-text">Se déconnecter</span>
            </a>
            </li>
           
          
        </ul>
        
      </nav>
    );
  }
  
