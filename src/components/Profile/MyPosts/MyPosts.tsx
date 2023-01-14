import React, {ChangeEvent} from 'react';
import {ActionsType, addPostAC, PostsType, updateNewPostTextAC} from '../../../Redux/State';
import c from './MyPosts.module.css';
import Post from "./Post/Post";



export type PropsType = {
    posts: Array<PostsType>
    newPostText:string
   // addPost:(postText:string)=>void
    dispatch:(action:ActionsType)=>void
    // updateNewPostText:(newText:string)=>void

}

function MyPosts(props:PropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    console.log(props)

    const addPost = () => {
          //props.addPost(props.newPostText)
        // props.dispatch({type:"ADD-POST",postText:props.newPostText})
        props.dispatch(addPostAC(props.newPostText))


    }
    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
   // props.updateNewPostText(e.currentTarget.value)
   //      props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:e.currentTarget.value})
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
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
