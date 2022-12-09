import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message={'Hi, How are you'} likesCount={0}/>
                <Post message={'Tnx fine, what about you?'} likesCount={11}/>
            </div>
        </div>


    );
}

export default MyPosts;
