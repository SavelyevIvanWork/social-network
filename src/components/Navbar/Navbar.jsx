import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item}`}>
                <NavLink className={style.link} activeClassName={style.active} to="/profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={style.link} activeClassName={style.active} to="/dialogs">Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={style.link} activeClassName={style.active} to="/usres">Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={style.link} to="#">News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={style.link} to="#">Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={style.link} to="#">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar

