const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    posts: [
        {name: 'Dimich', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Goga', id: 3}
    ],
    messages:[
        {message: 'BlaBla', id: 1},
        {message: 'BlaBla1', id: 2},
        {message: 'BlaBla2', id: 3},
    ],
    newMessageBody: '',
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.textBody
            }

        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: Date.now(), message: state.newMessageBody}]
            }

        default:
            return state
    }

}


export const updateNewMessageBodyActionCreator = (textBody) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, textBody: textBody,}
}

export const setMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}

export default dialogsReducer