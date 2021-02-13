import React from 'react'
import * as axios from "axios";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onChangePage = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            { this.props.isFetching && <Preloader/> }
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onChangePage={this.onChangePage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (usersID) => {
//             return dispatch(followAC(usersID))
//         },
//
//         unfollow: (usersID) => {
//             return dispatch(unfollowAC(usersID))
//         },
//
//         setUsers: (users) => {
//             return dispatch(setUsersAC(users))
//         },
//
//         setCurrentPage: (page) => {
//             return dispatch(setCurrentPageAC(page))
//         },
//
//         setTotalCount: (totalCount) => {
//             return dispatch(setTotalCountAC(totalCount))
//         },
//
//         toggleIsFetching: (isFetching) => {
//             return dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching})(UsersContainer)