import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElement = props.posts
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    const MessageElement = props.messages
        .map((message) => <Message text={message.message} id={message.id}/>)

    let newMessageBody = props.newMessageBody

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e) => {
        let textBody = e.target.value
        props.onNewMessageChange(textBody)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.dialogsItem}>
                <div>{MessageElement}</div>
                <div>
                    <textarea
                        placeholder='Enter your message!'
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    />
                </div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )

}

export default Dialogs