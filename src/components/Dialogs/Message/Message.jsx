import style from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={style.message} id={props.id}>{props.text}</div>
    )
}

export default Message