const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    messages: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'It\'s my first post', likesCount: 15},
    ],
    newPostText: 'it-kamasutra',
    profile: null,
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

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (newText) => {
    return {type: UPDATE_NEW_POST_TEXT, newText}
}

export const setUserProfile = profile => {
    return {type: SET_USER_PROFILE, profile}
}

export default profileReducer