import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//
//                     let changePost = (newText) => {
//                         store.dispatch(updateNewPostTextActionCreator(newText))
//                     }
//
//                     return (
//                         <MyPosts
//                             addPost={addPost}
//                             changePost={changePost}
//                             messages={state.profilePage.messages}
//                             newPostText={state.profilePage.newPostText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

let mapStateToProps = (state) => {
    return {
        messages: state.profilePage.messages,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changePost: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer