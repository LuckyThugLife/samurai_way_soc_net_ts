import React from 'react';
import {InitialStateDialogsPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs_reducer';
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToProps = {
dialogsPage: InitialStateDialogsPageType
}

type MapDispatchToProps = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void

}
export type DialogsPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state:AppStateType):MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC ())
        },
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;
