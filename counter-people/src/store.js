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
    return state;
}

const logger = store => next => action => {
    console.log("------------------");
    console.log(store.getState());
    console.log(action);
    next(action);
    console.log(store.getState());
}

const delayActions = store => next => action => {
    if (action.delay) {
        setTimeout(()=>next(action), action.delay)
    } else {
        next(action);
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(personReducer, 0, composeEnhancers(applyMiddleware(logger, delayActions)));