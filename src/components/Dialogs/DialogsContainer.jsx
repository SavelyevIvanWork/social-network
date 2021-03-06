import React from 'react';
import {
    onNewMessageChange,
    onSendMessageClick
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.dialogsPage.posts,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

const DialogsContainer = connect(mapStateToProps, {onSendMessageClick, onNewMessageChange}) (Dialogs)

export default DialogsContainer