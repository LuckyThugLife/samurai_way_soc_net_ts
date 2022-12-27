import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";
type PropsType = {
    profilePage:ProfilePageType
    addPost:(postMessage: string)=>void
}


function Profile(props:PropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>

    );
}

export default Profile;
