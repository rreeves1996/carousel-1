import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [collapsed, toggleCollapse] = useState(true);

  return (
    <nav>
      <div className={collapsed ? "navbar-toggler" : "navbar-toggler open"} onClick={() => toggleCollapse(!collapsed)}>
        <i className="fa-solid fa-bars"></i><i className="fa-solid fa-chevron-down navbar-hover-arrow"></i>
        <div className={!collapsed ? "nav-link-container" : "nav-link-container collapse"}>
          <Link to='/' className='nav-button' id='about-button'>
            <div className='about-link'>About</div>
          </Link>
          <Link to='/' className='nav-button' id='contact-button'>
            <div className='contact-link'>Contact</div>
          </Link>
          <Link to='/' className='nav-button' id='login-button'>
            <div className='login-link'>Login</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
 
