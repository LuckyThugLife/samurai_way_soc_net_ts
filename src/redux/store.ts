import profileReducer, { ProfileActionsType} from "./profile_reducer";
import dialogsReducer, {DialogsActionsType} from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    //updateNewPostText: (newText: string) => void
    //addPost: (postText: string) => void
    _onChange: (state:StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =ProfileActionsType | DialogsActionsType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you', likesCount: 22},
                {id: 2, message: 'Tnx fine, what about you?', likesCount: 123},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Rustam"},
                {id: 2, name: "Daler"},
                {id: 3, name: "Vitaliy"},
                {id: 4, name: "Timur"},
                {id: 5, name: "Ismail"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "What's up man"},
                {id: 3, message: "Tnx I'm fine"},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _onChange() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._onChange = observer
    },

    dispatch(action) {
       // this._state.profilePage = profileReducer(this._state.profilePage, action)
      //  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange(this._state)
    }
}

export default store