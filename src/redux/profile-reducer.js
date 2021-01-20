const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'


const profileReducer = (state, action) => {
    const updateNewPostText =(newText) => {
        state.newPostText = newText
    }
    const addPost = () => {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 7,
        }
        console.log(state)
        state.messages.push(newPost)
        state.newPostText = ''
    }

    switch (action.type) {
        case ADD_POST:
            addPost()
            return state
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newText)
            return state
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