import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItems";

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
