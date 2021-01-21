import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    // let state = props.store.getState()

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }
    //
    // let changePost = (newText) => {
    //     props.store.dispatch(updateNewPostTextActionCreator(newText))
    // }
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let changePost = (newText) => {
                        store.dispatch(updateNewPostTextActionCreator(newText))
                    }

                    return (
                        <MyPosts
                            addPost={addPost}
                            changePost={changePost}
                            messages={state.profilePage.messages}
                            newPostText={state.profilePage.newPostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer