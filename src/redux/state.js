// const dialogsData = [
//     {name: 'Dimich', id: 1},
//     {name: 'Sveta', id: 2},
//     {name: 'Goga', id: 3}
// ]
//
// const messageData = [
//     {message: 'BlaBla', id: 1},
//     {message: 'BlaBla1', id: 2},
//     {message: 'BlaBla2', id: 3},
// ]
//
// const postData = [
//     {message: 'Hi, how are you?', likesCount: 10},
//     {message: 'It\'s my first post', likesCount: 15},
//     {message: 'It\'s my first post', likesCount: 15},
// ]

import {rerenderEntireTree} from "../render";

const state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 7,
    }
    // console.log(newPost)
    state.profilePage.messages.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state