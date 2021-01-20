import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/FrofileInfo";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
            console.log(props.state)
        </div>
    )
}

export default Profile