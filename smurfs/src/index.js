import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux';
import { reducer } from './Reducers/RootReducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducer, applyMiddleware(thunk, logger))
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    rootElement);
