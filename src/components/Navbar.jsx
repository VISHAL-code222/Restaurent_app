import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import  restrozo_image from "../assets/Restrozo_image.jpg"

function Navbar() {
  return (
    <div>
      <nav className="nav-class">
      <img src={restrozo_image} alt="" />
        <Link className="logo-a" to="/">RESTROZO</Link>
       
        <ul className="ul-heading">
          <li>
            <Link className="link-a" to="/about">ABOUT</Link>
          </li>
          <li>
            <Link className="link-a" to="/menu">MENU</Link>
          </li>
          <li>
            <Link className="link-a" to="/specials">SPECIALS</Link>
          </li>
          <li>
            <Link className="link-a" to="/events">EVENTS</Link>
          </li>
         
          <li>
            <Link className="link-a" to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link className="link-a" to="/contact">CONTACT</Link>
          </li>
        </ul>
      <Link  className='bttonontop'  to="/bookatable" >  <button>BOOK A TABLE</button> </Link>
      </nav>
    </div>
  );
}

export default Navbar;


