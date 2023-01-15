import {ActionsType, PostsType, ProfilePageType, StateType,} from "./state"

export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

const profileReducer = (state: ProfilePageType, action: ActionsType):ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (postText: string)/*:AddPostActionType*/ => {
    return {
        type: "ADD-POST",
        postText: postText

    } as const
    // return{type:"ADD-POST",postText:props.newPostText}
}
export const updateNewPostTextAC = (newText: string)/*:ChangeNewTextActionType*/ => {
    // return{type:"UPDATE-NEW-POST-TEXT", newText:e.currentTarget.value}
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export default profileReducer