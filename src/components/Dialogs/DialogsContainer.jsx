import React from 'react';
import {setMessageActionCreator, updateNewMessageBodyActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//
//                     let onSendMessageClick = () => {
//                         store.dispatch(setMessageActionCreator())
//                     }
//
//                     let onNewMessageChange = (textBody) => {
//                         store.dispatch(updateNewMessageBodyActionCreator(textBody))
//                     }
//
//                     return (
//                         <Dialogs
//                             onSendMessageClick={onSendMessageClick}
//                             onNewMessageChange={onNewMessageChange}
//                             posts={state.dialogsPage.posts}
//                             messages={state.dialogsPage.messages}
//                             newMessageBody={state.dialogsPage.newMessageBody}
//                         />
//                     )
//                 }
//             }
//
//         </StoreContext.Consumer>
//
//     )
//
// }

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