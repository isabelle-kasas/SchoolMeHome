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
              <div className="avatarName">John Doe</div>
            </div>
            
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <MdDashboard size={30}/>
              <span className="link-text">Mon dashboard</span>
            </a>
            </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <FaUser size={30}/>
              <span className="link-text">Mon profil</span>
            </a>
          </li >
            <li className="nav-item">
              <a href="/" className="nav-link">
              <FaBook size={30}/>
              <span className="link-text">Mes cours</span>
            </a>
            </li>
            <li className="nav-item">
               <a href="/" className="nav-link">
              <FaSignOutAlt size={30}/>
              <span className="link-text">Se déconnecter</span>
            </a>
            </li>
           
          
        </ul>
        
      </nav>
    );
  }
  
