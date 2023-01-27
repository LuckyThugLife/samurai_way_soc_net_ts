import React, {ChangeEvent} from 'react';
import {InitialStateDialogsPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs_reducer';
import {AppStateType, StoreTypes} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToProps = {
dialogsPage: InitialStateDialogsPageType
}

type MapDispatchToProps = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:(newText: string)=>void

}
export type DialogsPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state:AppStateType):MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        // updateNewMessageBody: () => { dispatch(updateNewMessageBodyAC(body)},
        // sendMessage: (body) => { dispatch(sendMessageAC(body)},
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: (newText: string) => {
            dispatch(sendMessageAC (newText))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;
