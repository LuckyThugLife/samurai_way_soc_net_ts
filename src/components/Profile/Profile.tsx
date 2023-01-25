import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchType} from "../../redux/redux-store";
import {InitialStateProfilePageType} from "../../redux/profile_reducer";
type PropsType = {
   // profilePage:ProfilePageType
   profilePage:InitialStateProfilePageType
    newPostText:string
    //addPost:(postMessage: string)=>void
   // dispatch:(action:ActionsType)=>void
    dispatch:DispatchType
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
