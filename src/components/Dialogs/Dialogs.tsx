import React from 'react';
import c from './Dialogs.module.css';


function Dialogs() {
    return (

        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog + ' ' + c.active}>
                    Rustam
                </div>
                <div className={c.dialog}>
                    Daler
                </div>
                <div className={c.dialog}>
                    Vitaliy
                </div>
                <div className={c.dialog}>
                    Timur
                </div>
                <div className={c.dialog}>
                    Ismail
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
