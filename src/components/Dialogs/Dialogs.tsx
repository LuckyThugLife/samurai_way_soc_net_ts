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
    let dialogsData = [
        {id: "1", name: "Rustam"},
        {id: "2", name: "Daler"},
        {id: "3", name: "Vitaliy"},
        {id: "4", name: "Timur"},
        {id: "5", name: "Ismail"},
    ]

    let messagesData = [
        {id: "1", message: "Hi"},
        {id: "2", message: "What's up man"},
        {id: "3", message: "Tnx I'm fine"},
    ]

    return (

        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
               <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
               <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
               <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
               <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
               <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={c.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>

    );
}

export default Dialogs;
