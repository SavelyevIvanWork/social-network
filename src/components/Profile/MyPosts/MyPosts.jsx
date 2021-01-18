import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    const postData = [
        {message: 'Hi, how are you?', likesCount: 10},
        {message: 'It\'s my first post', likesCount: 15},
    ]
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount} />
            <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            <Post />
        </div>
    )
}

export default MyPosts