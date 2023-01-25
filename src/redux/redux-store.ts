import {combineReducers, createStore} from "redux";
import React from "react";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    //sidebar: sidebarReducer
})

export type StoreTypes = typeof store
export type RootStateType = ReturnType<typeof reducers>
export type DispatchType = typeof store.dispatch
export let store = createStore(reducers)

export default store