import {React, useState} from "react";
import { links } from "../data";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [showmenu, setShowmenu]=useState(false);
  return (
    <nav className="nav">
      <div className={`${showmenu ? 'nav_menu show_menu' : 'nav_menu'}`}>
        <ul className="nav_list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav_item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav_link active-nav" : "nav_link"
                  }
                  onClick={()=>setShowmenu(!showmenu)}
                >
                  {icon}
                  <h3 className="nav_name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${showmenu ? 'nav_toggle animated_toggle' : 'nav_toggle'}`} onClick={()=>setShowmenu(!showmenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
