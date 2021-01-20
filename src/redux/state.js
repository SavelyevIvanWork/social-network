const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const store = {
    _state: {
        profilePage: {
            messages: [
                {message: 'Hi, how are you?', likesCount: 10},
                {message: 'It\'s my first post', likesCount: 15},
                {message: 'It\'s my first post', likesCount: 15},
            ],
            newPostText: 'it-kamasutra',
        },

        dialogsPage: {
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
        },
    },

    _callSubscriber() {
        console.log('State')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addPost(postMessage) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 7,
        }
        // console.log(newPost)
        this._state.profilePage.messages.message.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewMessageBody(textBody) {
        this._state.dialogsPage.newMessageBody = textBody
        this._callSubscriber(this._state)
    },
    setMessage() {
        let message = {
            id: Date.now(),
            message: this._state.dialogsPage.newMessageBody
        }
        // console.log(message)
        this._state.dialogsPage.messages.push(message)
        this._state.dialogsPage.newMessageBody = ''
        this._callSubscriber(this._state)
    },

    dispatch(action) {

        switch (action.type) {
            case ADD_POST:
                this.addPost()
                break
            case UPDATE_NEW_POST_TEXT:
                this.updateNewPostText(action.newText)
                break
            case UPDATE_NEW_MESSAGE_BODY:
                this.updateNewMessageBody(action.textBody)
                break
            case SEND_MESSAGE:
                this.setMessage()
                break
        }
    }

}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (newText) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText,}
}

export const updateNewMessageBodyActionCreator = (textBody) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, textBody: textBody,}
}

export const setMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}

export default store