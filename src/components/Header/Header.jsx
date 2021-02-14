import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login}) => {
    return (
        <header className={style.header}>
            <img src="https://tattoo-stickers.ru/62750-thickbox_default/vintazhnyj-logotip-apple.jpg" alt=""
                 width="30px" height="30px"/>
            <div className={style.login__link}>
                { isAuth ? login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header