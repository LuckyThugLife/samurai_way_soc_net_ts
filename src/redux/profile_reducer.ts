import {sendMessageAC} from "./dialogs_reducer";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"


export type ProfileActionsType = AddPostACType | UpdateNewPostTextACType



export type PostsType ={
    id: number
    message: string
    likesCount: number
}

const InitialStateProfilePage = {
    posts: [
        {id: 1, message: 'Hi, How are you', likesCount: 22},
        {id: 2, message: 'Tnx fine, what about you?', likesCount: 123},
    ] as Array<PostsType>,
    newPostText: ""
}

export type InitialStateProfilePageType = typeof InitialStateProfilePage

const profileReducer = (state = InitialStateProfilePage, action: ProfileActionsType):InitialStateProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

 export type AddPostACType = ReturnType<typeof addPostAC>
 export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (postText: string)/*:AddPostActionType*/ => {
    return {
        type: ADD_POST,
        postText: postText

    } as const
    // return{type:"ADD-POST",postText:props.newPostText}
}

export const updateNewPostTextAC = (newText: string)/*:ChangeNewTextActionType*/ => {
    // return{type:"UPDATE-NEW-POST-TEXT", newText:e.currentTarget.value}
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer