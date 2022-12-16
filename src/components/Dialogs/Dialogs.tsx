import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css';


function Dialogs() {
    return (

        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog + ' ' + c.active}>
                    <NavLink to="/dialogs/1">Rustam</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/2">Daler</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/3">Vitaliy</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/4">Timur</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/5">Ismail</NavLink>
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hi</div>
                <div className={c.message}>What's up man</div>
                <div className={c.message}>Tnx I'm fine</div>
            </div>
        </div>

    );
}

export default Dialogs;
