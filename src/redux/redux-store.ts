import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})

export type StoreTypes = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch
export let store = createStore(rootReducer)

export default store

