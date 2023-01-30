const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW"
const SET_USERS = "SET_USERS"


export type UsersActionsType = UnFollowACType | FollowACType | SetUsersACType

export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const InitialStateUsersPage = {
    users: [] as Array<UsersType>

}

export type InitialStateUsersPageType = typeof InitialStateUsersPage

const usersReducer = (state = InitialStateUsersPage, action: UsersActionsType): InitialStateUsersPageType => {

    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: [ ...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export type UnFollowACType = ReturnType<typeof unFollowAC>
export type FollowACType = ReturnType<typeof followAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

export const unFollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId:userId
    } as const
}
export const setUsersAC = (users:Array<UsersType>) => {
    return {
        type: SET_USERS,
        users:users
    }as const
}


export default usersReducer