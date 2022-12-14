import React from 'react';
import c from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount:number
}

function Post(props:PostPropsType) {
    return (

            <div className={c.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71FNCpqf8hon3hpnrvoQhVvhZsif-V1B5Xw&usqp=CAU"/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}

                </div>
            </div>




    );
}

export default Post;
