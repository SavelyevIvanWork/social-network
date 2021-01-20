import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)

    }

}

export default store