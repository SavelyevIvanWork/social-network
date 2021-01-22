import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersID) => {
            return dispatch(followAC(usersID))
        },

        unfollow: (usersID) => {
            return dispatch(unfollowAC(usersID))
        },

        setUsers: (users) => {
            return dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users)