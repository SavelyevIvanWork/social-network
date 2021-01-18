import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/FrofileInfo";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;