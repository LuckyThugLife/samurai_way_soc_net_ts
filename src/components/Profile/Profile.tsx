import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";
type PropsType = {
    profilePage:ProfilePageType
    newPostText:string
    //addPost:(postMessage: string)=>void
    dispatch:(action:ActionsType)=>void
    // updateNewPostText:(newText:string) => void
}


function Profile(props:PropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                    // addPost={props.addPost}
                    //  updateNewPostText={props.updateNewPostText}
                     dispatch={props.dispatch}
            />
        </div>

    );
}

export default Profile;
