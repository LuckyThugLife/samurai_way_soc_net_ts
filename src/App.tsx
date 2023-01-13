import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import store, { StateType, StoreType,} from "./Redux/State";


export type AppPropsType = {
    store:StoreType
    // state: StateType;
    // addPost: (postMessage: string) => void
    // updateNewPostText:(newText:string) => void
}


const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={state.profilePage}
                        newPostText={state.profilePage.newPostText}
                        addPost={props.store.addPost.bind(props.store)}
                        updateNewPostText={props.store.updateNewPostText.bind(props.store)}


                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
