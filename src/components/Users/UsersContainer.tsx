import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users_reducer";



type MapStateToProps = {
    users: UsersType[]
}

type MapDispatchToProps = {
    unFollow:(userId:number)=>void
    follow:(userId:number)=>void
    setUsers:(users:Array<UsersType>)=>void

}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state:AppStateType):MapStateToProps => {
     return {users:state.usersPage.users}
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        unFollow: (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer