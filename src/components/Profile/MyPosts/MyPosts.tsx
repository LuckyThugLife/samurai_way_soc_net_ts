import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    let postsData = [
        {id: "1", message: 'Hi, How are you', likesCount: 22},
        {id: "2", message: 'Tnx fine, what about you?', likesCount: 123},
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>


    );
}

export default MyPosts;
