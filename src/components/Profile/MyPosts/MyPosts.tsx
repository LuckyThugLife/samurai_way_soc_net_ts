import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (

        <div className={c.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
                </div>
            <div className={c.posts}>
                <Post message={'Hi, How are you'} likesCount={0}/>
                <Post message={'Tnx fine, what about you?'} likesCount={11}/>
            </div>
        </div>


    );
}

export default MyPosts;
