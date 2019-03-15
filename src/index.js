import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, compose ,combineReducers, createStore } from 'redux';
import productReducers from './reducers/productReducers';
import userReducers from './reducers/userReducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import employeeReducers from "./reducers/employeeReducers";

const allReducers = combineReducers({
    products: productReducers,
    user: userReducers,
    employee: employeeReducers
});

const allStoreEnhancers = compose(
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(allReducers, {
        products: [{name: 'IPhone'}, {name: 'Google Nexus'}],
        user: 'John Lennon',
        employee:[]
    }, allStoreEnhancers);


ReactDOM.render(<Provider store={store}><App aRandomProps="This is send from index.js" /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();