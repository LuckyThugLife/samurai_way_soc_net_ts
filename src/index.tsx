
import state, {subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/State";

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );

}

rerenderEntireTree()
subscribe(rerenderEntireTree)
/*
ReactDOM.render(
    <App state={state} addPost={addPost}/>,
  document.getElementById('root')
);*/
