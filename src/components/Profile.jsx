import React from "react";
import style from './Profile.module.css';
const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://arte1.ru/images/detailed/4/23608.jpg" alt=""/>
            </div>
            <div>avatar + description</div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={style.item}>post_1</div>
                <div>post_2</div>
            </div>
        </div>
    )
}

export default Profile