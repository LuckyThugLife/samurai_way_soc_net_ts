import {StateType, DialogsPageType, ActionsType} from "./state";
import {addPostAC, updateNewPostTextAC} from "./profile_reducer";

export type DialogsActionsType =

    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>


const dialogsReducer = (state: DialogsPageType, action: ActionsType):DialogsPageType => {

    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.body
            return state
        case "SEND_MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }

}

export const sendMessageAC = (newText: string)/*:ChangeNewTextActionType*/ => {
    return {
        type: "SEND_MESSAGE",
        newText: newText
    } as const
}
export const updateNewMessageBodyAC = (body: string)/*:ChangeNewTextActionType*/ => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        body: body
    } as const
}





export default dialogsReducer