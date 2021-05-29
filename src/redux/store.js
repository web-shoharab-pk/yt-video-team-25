import { createStore, applyMiddleware, combineReducers } from "redux";

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import {authReducer} from './reducers/auth.reducer'
import { homeVideosReducers } from "./reducers/videos.reducer";

 const rootReducer = combineReducers({

   auth: authReducer,
  homeVideos: homeVideosReducers
 })
 
const store = createStore(
    rootReducer, 
    {}, 
    composeWithDevTools(applyMiddleware(thunk)))


export default store;