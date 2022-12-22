import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItems";
import { DialogsPageType } from '../../Redux/State';


type PropsType = {
    dialogsPage: DialogsPageType
}

function Dialogs(props:PropsType) {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

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
