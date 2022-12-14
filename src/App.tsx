import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, StateType, updateNewPostText} from "./Redux/State";


export type AppPropsType = {
    state: StateType;
    addPost: (postMessage: string) => void
    updateNewPostText:(newText:string) => void
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        newPostText={props.state.profilePage.newPostText}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText}


                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
