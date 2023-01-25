import React, { ChangeEvent } from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItems";
import {InitialStateDialogsPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs_reducer';
import {DispatchType, StoreTypes} from "../../redux/redux-store";



type PropsType = {
    dialogsPage: InitialStateDialogsPageType
    dispatch:  DispatchType
}

function Dialogs(props:PropsType) {

    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
let newMessageBody = state.newMessageBody
    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC(newMessageBody))
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
 let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
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
