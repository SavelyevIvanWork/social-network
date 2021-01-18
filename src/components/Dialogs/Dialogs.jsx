import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElement = props.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    const MessageElement = props.messageData
        .map((message) => <Message text={message.message} id={message.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.dialogsItem}>
                {MessageElement}
            </div>
        </div>
    )

}

export default Dialogs