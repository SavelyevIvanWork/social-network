const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
    const updateNewMessageBody = (textBody) => {
        state.newMessageBody = textBody
    }
    const setMessage = () =>  {
        let message = {
            id: Date.now(),
            message: state.newMessageBody
        }

        state.messages.push(message)
        state.newMessageBody = ''
    }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            updateNewMessageBody(action.textBody)
            break
        case SEND_MESSAGE:
            setMessage()
            break
    }
    return state
}


export const updateNewMessageBodyActionCreator = (textBody) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, textBody: textBody,}
}

export const setMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}

export default dialogsReducer