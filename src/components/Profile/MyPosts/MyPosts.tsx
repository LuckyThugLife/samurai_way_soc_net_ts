import React from 'react';
import {PostsType} from '../../../redux/profile_reducer';
import c from './MyPosts.module.css';
import Post from "./Post/Post";


export type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
   updateNewPostText:(newText: string)=>void
}

function MyPosts(props: PropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }
    const onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (

        <div className={c.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={onPostChangeHandler}
                          ref={newPostElement}
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
