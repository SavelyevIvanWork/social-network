import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let changePost = (newText) => {
        props.store.dispatch(updateNewPostTextActionCreator(newText))
    }
    return (
        <MyPosts
            addPost={addPost}
            changePost={changePost}
            messages={state.profilePage.messages}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer