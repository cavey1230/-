import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import {Provider, connect} from "react-redux";
import {breakSubAction, breakAddAction, breakLengthReducer} from "./reducer/breakLengthReducer";
import {sessionSubAction, sessionLengthReducer, sessionAddAction} from "./reducer/sessionLengthReducer";
import {intervalReducer, saveTimes} from "./reducer/intervalReducer";

const combin = combineReducers(
    {
        break: breakLengthReducer,
        session: sessionLengthReducer,
        interval: intervalReducer
    }
)
const store = createStore(combin);
console.log(store.getState());

const mapStateToProps = (state) => {
    return {
        break: state.break,
        session: state.session,
        interval: state.interval
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        breakAction: {
            add: ()=>dispatch(breakAddAction()),
            sub: ()=>dispatch(breakSubAction())
        },
        sessionAction: {
            add: ()=>dispatch(sessionAddAction()),
            sub: ()=>dispatch(sessionSubAction())
        },
        interValAction:(mm,ss)=>{dispatch(saveTimes(mm,ss))}
    }
}
const Con=connect(mapStateToProps,mapDispatchToProps)(App)

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Con />
        </Provider>,
        document.getElementById('root')
    )
}
render();
store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
