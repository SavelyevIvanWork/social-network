import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://arte1.ru/images/detailed/4/23608.jpg" alt=""/>
            </div>
            <div>avatar + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;