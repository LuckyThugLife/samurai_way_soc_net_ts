import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './../Dialogs.module.css';

export type PropsDialogItemType = {
    name: string
    id: string
}


const DialogItem = (props:PropsDialogItemType) => {

    return <div className={c.dialog + ' ' + c.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem;
