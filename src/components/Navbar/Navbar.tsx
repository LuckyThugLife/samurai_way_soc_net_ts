import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';


function Navbar() {
  return (
        <nav className={c.nav}>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/dialogs" activeClassName={c.activeLink}>Dialogs</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/messages" activeClassName={c.activeLink}>Messages</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/users" activeClassName={c.activeLink}>Users</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/news" activeClassName={c.activeLink}>News</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/music" activeClassName={c.activeLink}>Music</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/settings" activeClassName={c.activeLink}>Settings</NavLink>
            </div>
        </nav>

  );
}

export default Navbar;
