import {applyMiddleware, createStore} from "redux";

import thunk from "redux-thunk";
import { browserHistory } from "react-router";
import { routerMiddleware } from 'react-router-redux';

import reducer from "./reducer";

const middleware = applyMiddleware(thunk, routerMiddleware(browserHistory));
export default createStore(reducer, middleware);