import React, { ChangeEvent } from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItems";
import {DialogsPageType, sendMessageAC, StoreType, updateNewMessageBodyAC} from '../../Redux/State';


type PropsType = {
    //dialogsPage: DialogsPageType
    store:StoreType
}

function Dialogs(props:PropsType) {

    let state = props.store.getState().dialogsPage


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
let newMessageBody = state.newMessageBody
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC(newMessageBody))
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
 let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (

        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={"Enter your message"}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;
