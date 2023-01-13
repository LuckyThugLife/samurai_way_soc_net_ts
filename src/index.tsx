
import store from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export const rerenderEntireTree = () => {

    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );

}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
/*
ReactDOM.render(
    <App state={state} addPost={addPost}/>,
  document.getElementById('root')
);*/
