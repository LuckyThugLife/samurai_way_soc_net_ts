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
    return (

        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
               <DialogItem name={"Rustam"} id={"1"}/>
               <DialogItem name={"Daler"} id={"2"}/>
               <DialogItem name={"Vitaliy"} id={"3"}/>
               <DialogItem name={"Timur"} id={"4"}/>
               <DialogItem name={"Ismail"} id={"5"}/>
            </div>
            <div className={c.messages}>
                <Message message={"Hi"}/>
                <Message message={"What's up man"}/>
                <Message message={"Tnx I'm fine"}/>
            </div>
        </div>

    );
}

export default Dialogs;
