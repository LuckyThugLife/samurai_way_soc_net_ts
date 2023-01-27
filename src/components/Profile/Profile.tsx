import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer, {PropsType} from "./MyPosts/MyPostsContainer";
import {StoreTypes} from "../../redux/redux-store";



function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
            />
        </div>

    );
}

export default Profile;
