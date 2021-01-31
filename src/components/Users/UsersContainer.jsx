import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
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
        },

        setCurrentPage: (page) => {
            return dispatch(setCurrentPageAC(page))
        },

        setTotalCount: (totalCount) => {
            return dispatch(setTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)