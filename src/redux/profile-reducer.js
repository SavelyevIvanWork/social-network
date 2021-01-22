const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    messages: [
        {message: 'Hi, how are you?', likesCount: 10},
        {message: 'It\'s my first post', likesCount: 15},
        {message: 'It\'s my first post', likesCount: 15},
    ],
    newPostText: 'it-kamasutra',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                messages: [...state.messages, {id: 5, message: state.newPostText, likesCount: 7,}]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (newText) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText,}
}

export default profileReducer