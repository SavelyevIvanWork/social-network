import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    const postElement = props.profilePage.messages
        .map((post) => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onchangePost = () => {
        let newText = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(newText))
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input
                    type="textarea"
                    ref={newPostElement}
                    value={props.profilePage.newPostText}
                    onChange={onchangePost}
                />
            </div>
            <button onClick={addPost}>Add</button>
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