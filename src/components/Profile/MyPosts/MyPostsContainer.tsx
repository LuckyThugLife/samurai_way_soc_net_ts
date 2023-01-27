import React from 'react';
import {addPostAC, PostsType, updateNewPostTextAC} from '../../../redux/profile_reducer';
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

import {Dispatch} from "redux";

type MapStateToProps = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToProps = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}
export type PropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewPostText: (newText: string) => {
            let action = updateNewPostTextAC(newText)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
