import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/_base.scss'
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(

    <Provider store={store}>
        <Router>
            <App />
        </Router>

    </Provider>


    , document.getElementById("root"))