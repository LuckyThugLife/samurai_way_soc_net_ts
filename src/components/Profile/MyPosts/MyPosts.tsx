import React, {ChangeEvent} from 'react';
import { PostsType } from '../../../Redux/State';
import c from './MyPosts.module.css';
import Post from "./Post/Post";



export type PropsType = {
    posts: Array<PostsType>
    newPostText:string
    addPost:(postText:string)=>void
    updateNewPostText:(newText:string)=>void

}



function MyPosts(props:PropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    const addPost = () => {

          props.addPost(props.newPostText)


    }
    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
    }

    return (

        <div className={c.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={onPostChangeHandler}
                          value={props.newPostText}
                />
                </div>
                <div>
                <button onClick={addPost}>Add post</button>
                </div>
                </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>


    );
}

export default MyPosts;
