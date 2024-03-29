const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export type DialogsActionsType = SendMessageACType | UpdateNewMessageBodyACType

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export const InitialStateDialogsPage = {
    dialogs: [
        {id: 1, name: "Rustam"},
        {id: 2, name: "Daler"},
        {id: 3, name: "Vitaliy"},
        {id: 4, name: "Timur"},
        {id: 5, name: "Ismail"},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "What's up man"},
        {id: 3, message: "Tnx I'm fine"},
    ] as Array<MessagesType>,
    newMessageBody: ""
}

export type InitialStateDialogsPageType = typeof InitialStateDialogsPage

const dialogsReducer = (state = InitialStateDialogsPage, action: DialogsActionsType): InitialStateDialogsPageType => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,newMessageBody:action.body}

        case SEND_MESSAGE:

            let body = state.newMessageBody
            return  {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export type SendMessageACType = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>

export const sendMessageAC = ()  => {
    return {
        type: SEND_MESSAGE
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY ,
        body: body
    } as const
}


export default dialogsReducer