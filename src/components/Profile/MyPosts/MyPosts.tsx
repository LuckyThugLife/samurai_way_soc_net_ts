import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    let posts = [
        {id: "1", message: 'Hi, How are you', likesCount: 22},
        {id: "2", message: 'Tnx fine, what about you?', likesCount: 123},
    ]
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>


    );
}

export default MyPosts;
