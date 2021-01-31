const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState = {
    users: [
        // {id: 1, followed: true, avatarSRC: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkWT0i_I7ODkRB1M57H0EFXaaKTM5SRkZCeTgDn6uOyic', fullName: 'Иосиф Бродский', status: 'Сядь в поезд, высадись у моря', location: {city: 'Ленинград', country: 'СССР'}},

    ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        default:
            return state
    }
}

export const followAC = (userID) => {
    return {type: FOLLOW, userID}
}

export const unfollowAC = (userID) => {
    return {type: UNFOLLOW, userID}

}

export const setUsersAC = (users) => {
    return {type: SET_USERS, users}

}

export const setCurrentPageAC = (page) => {
    return {type: SET_CURRENT_PAGE, page}

}

export const setTotalCountAC = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}

}

export default usersReducer