import {createStore, applyMiddleware, compose} from 'redux'

export const addPerson = () => ({
    type:"ADD_PERSON",
    meta:{
        debounce: 1000
    }
})
export const decreasePerson = () => ({
    type:"DECREASE_PERSON",
    delay: 1000
});
export const followersPerson = () => dispatch => {
    fetch('http://api.github.com/users/felixrigau')
    .then(
        response => response.json()
    )
    .then(
        data => dispatch({
            type: 'FOLLOWERS_PERSON',
            payload: data.followers
        })
    )
};
export const cleanRoom = () => ({type:"CLEAR_ROOM"})
export const fullRoom = () => ({type:"FULL_ROOM"});

export const personReducer = (state, action) => {
    if(action.type === "ADD_PERSON"){
        return state + 1;
    }
    if(action.type === "DECREASE_PERSON"){
        return state > 0 ? state - 1: state;
    }   
    if(action.type === "CLEAR_ROOM"){
        return state = 0;
    }
    if(action.type === "FULL_ROOM"){
        return state = 10;
    }  
    if(action.type === "FOLLOWERS_PERSON"){
        return state = action.payload;
    }  
    return state;
}

//Middleware
const logger = store => next => action => {
    console.log("------------------");
    console.log(store.getState());
    console.log(action);
    next(action);
    console.log(store.getState());
}

//Middleware
const delayActions = store => next => action => {
    if (action.delay) {
        setTimeout(()=>next(action), action.delay)
    } else {
        next(action);
    }
}

//Middleware
const stateLocalStorage = store => next => action => {
    next(action);
    localStorage.setItem('app store', store.getState());
}

//Middleware Redux Thunk
const thunk = store => next => action => {
    if(typeof action !== 'function'){
        next(action);
        return '';
    }
    action(store.dispatch)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(personReducer, localStorage.getItem('app store'), composeEnhancers(applyMiddleware(logger, delayActions, stateLocalStorage, thunk)));