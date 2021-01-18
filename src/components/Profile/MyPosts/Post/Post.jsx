import React from "react";
import style from "./Post.module.css"

const Post = (props) => {

    return (
        <div className={style.item}>
            <span>Avatar</span>
            {props.message}
            <div>
                {props.likesCount}
            </div>

        </div>
    )
}

export default Post