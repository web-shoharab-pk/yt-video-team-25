import { createStore, applyMiddleware } from "redux";

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';


const initialState = {
    name: 'Shoharab',
    age: '19'
}

const reducer = (initialState) => initialState;

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware()))


export default store;