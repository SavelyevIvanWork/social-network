import React from 'react';
import {setMessageActionCreator, updateNewMessageBodyActionCreator,} from "../../redux/dialogs-reducer";
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

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(setMessageActionCreator())
        },

        onNewMessageChange: (textBody) => {
            dispatch(updateNewMessageBodyActionCreator(textBody))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer