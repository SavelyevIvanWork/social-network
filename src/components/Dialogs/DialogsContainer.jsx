import React from 'react';
import {setMessageActionCreator, updateNewMessageBodyActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    // let state = props.store.getState()
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(setMessageActionCreator())
    // }
    //
    // let onNewMessageChange = (textBody) => {
    //     props.store.dispatch(updateNewMessageBodyActionCreator(textBody))
    // }
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let onSendMessageClick = () => {
                        store.dispatch(setMessageActionCreator())
                    }

                    let onNewMessageChange = (textBody) => {
                        store.dispatch(updateNewMessageBodyActionCreator(textBody))
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
            }

        </StoreContext.Consumer>

    )

}

export default DialogsContainer