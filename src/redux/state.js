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
        },
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State')
    },

    addPost(postMessage) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 7,
        }
        // console.log(newPost)
        this._state.profilePage.messages.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
}

export default store