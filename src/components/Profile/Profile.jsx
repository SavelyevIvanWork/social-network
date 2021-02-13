import React from "react";
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/FrofileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile