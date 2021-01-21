import React from 'react';
import {setMessageActionCreator, updateNewMessageBodyActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let onSendMessageClick = () => {
        props.store.dispatch(setMessageActionCreator())
    }

    let onNewMessageChange = (textBody) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(textBody))
    }
    return (
        <Dialogs
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
            posts={state.dialogsPage.posts}
            messages={state.dialogsPage.messages}
            newMessageBody={state.dialogsPage.newMessageBody}
        />
    )

}

export default DialogsContainer