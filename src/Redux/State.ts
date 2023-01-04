let onChange = () => {
    console.log("State changed")
}

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

let state: StateType = {
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

}

export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: 5,
        //message:state.profilePage.newPostText,
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    onChange()
}

export const updateNewPostText = (newText: string) => {

    state.profilePage.newPostText = newText
    onChange()
}

export const subscribe = (observer: () => void) => {
    onChange = observer
}

export default state