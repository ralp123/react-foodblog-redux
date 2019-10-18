import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
//import store from './reducers/post-reducer';
import store from './components/redux/reducers/post-reducer';
//import store1 from './components/redux/reducers/auth-reducers';
//import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

// const store = createStore(store1, composeEnhances(
//     applyMiddleware(thunk)
// ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//nimal, nakurat ko pag-open sa skype.. na close naku ditso.. hahahah
serviceWorker.unregister();
 