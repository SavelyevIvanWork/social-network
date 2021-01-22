const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Ivan', status: 'scsc', location: {city: 'Minsk', country: 'Belarus'}},

    ],
    newPostText: 'it-kamasutra',
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
                users: [...state.users, ...action.users]
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

export default usersReducer