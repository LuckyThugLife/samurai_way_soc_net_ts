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

}

export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: SidebarType
}

export type StoreType = {
    _state: StateType
    //updateNewPostText: (newText: string) => void
    //addPost: (postText: string) => void
    _onChange: () => void
    subscribe:(observer: () => void) => void
    getState:()=>StateType
    dispatch:(action:ActionsType)=>void
}

type AddPostActionType = {
    type: "ADD-POST"
    postText:string
}
type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText:string
}

export type ActionsType = AddPostActionType | ChangeNewTextActionType

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
            ]
        },
        sidebar: {}

    },
    _onChange() {
        console.log("State changed")
    },

    getState(){
        return this._state
    },
    subscribe(observer) {
        this._onChange = observer
    },

    /*addPost(postText: string) {
        const newPost: PostsType = {
            id: 5,
            //message:state.profilePage.newPostText,
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },*/
    dispatch(action){
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: new Date().getTime(),
                //message:state.profilePage.newPostText,
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._onChange()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }

    }



}

export default store