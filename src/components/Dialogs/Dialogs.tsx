import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css';

export type PropsDialogItemType = {
    name: string
    id: string
}

export type PropsMessageType = {
    message: string
}

const DialogItem = (props:PropsDialogItemType) => {

    return <div className={c.dialog + ' ' + c.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props:PropsMessageType) => {

    return <div className={c.message}>{props.message}</div>
}


function Dialogs() {
    let dialogs = [
        {id: "1", name: "Rustam"},
        {id: "2", name: "Daler"},
        {id: "3", name: "Vitaliy"},
        {id: "4", name: "Timur"},
        {id: "5", name: "Ismail"},
    ]

    let messages = [
        {id: "1", message: "Hi"},
        {id: "2", message: "What's up man"},
        {id: "3", message: "Tnx I'm fine"},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (

        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>

    );
}

export default Dialogs;
