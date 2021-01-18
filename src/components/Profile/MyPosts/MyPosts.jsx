import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postElement = props.profilePage.messages
        .map((post) => <Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input type="textarea"/>
            </div>
            <button type='button'>Add</button>
            <div>
                New post
            </div>
            <div className={style.post}>
                {postElement}
            </div>
            <Post/>
        </div>
    )
}

export default MyPosts