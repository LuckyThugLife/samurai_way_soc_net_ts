
import store, {RootStateType, StoreTypes} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export const rerenderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <App state={state} />,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})
/*
ReactDOM.render(
    <App state={state} addPost={addPost}/>,
  document.getElementById('root')
);*/
