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
        case ADD_POST: {
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return  {...state, posts: [...state.posts, newPost],
            newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

 export type AddPostACType = ReturnType<typeof addPostAC>
 export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = ()/*:AddPostActionType*/ => {
    return {
        type: ADD_POST,
    } as const
}

export const updateNewPostTextAC = (newText: string)=> {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer