import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
            <div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfzqIDJarlhnyPIuTy4PGzRrJ9YoQDmUhzyxydK4bt9QPtpn2kLdTiZnuY0jo-4gN-J4&usqp=CAU" alt="content"/>
                </div>
                <div>
                    ava+description
                </div>
               <MyPosts/>
                </div>

  );
}

export default Profile;
