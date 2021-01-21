import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postElement = props.messages
        .map((post) => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }
    let onChangePost = () => {
        let newText = newPostElement.current.value
        props.changePost(newText)
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <input
                    type="textarea"
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onChangePost}
                />
            </div>
            <button onClick={onAddPost}>Add</button>
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