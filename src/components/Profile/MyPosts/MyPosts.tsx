import React from 'react';
import { PostsType } from '../../../Redux/State';
import c from './MyPosts.module.css';
import Post from "./Post/Post";



export type PropsType = {
    posts: Array<PostsType>

}

function MyPosts(props:PropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
