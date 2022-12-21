import React from 'react';
import c from './../Dialogs.module.css';


export type PropsMessageType = {
    message: string
}

const Message = (props:PropsMessageType) => {

    return <div className={c.message}>{props.message}</div>
}

export default Message;
