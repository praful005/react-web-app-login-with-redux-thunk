import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore,applyMiddleware,compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// import reducer from "./reducers";
import userReducer from "./reducers/user.reducer";
import inquiryReducer from "./reducers/inquiry.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const masterReducer = combineReducers({
  user:userReducer,
  inquiry:inquiryReducer
})

const store = createStore(
  masterReducer,
  composeEnhancers(applyMiddleware(thunk))
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);