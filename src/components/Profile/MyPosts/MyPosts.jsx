import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <Post message="Hi, how are you?" />
            <Post message="It's my first post" />
            <Post />
        </div>
    )
}

export default MyPosts