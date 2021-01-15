import React from "react";
import style from '../Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <a className={style.link} href="#">Profile</a>
            </div>
            <div className={style.item}>
                <a className={style.link} href="#">Messages</a>
            </div>
            <div className={style.item}>
                <a className={style.link} href="#">News</a>
            </div>
            <div className={style.item}>
                <a className={style.link} href="#">Music</a>
            </div>
            <div className={style.item}>
                <a className={style.link} href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar

