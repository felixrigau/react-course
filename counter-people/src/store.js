import {createStore} from 'redux'

export const addPerson = () => ({type:"ADD_PERSON"})
export const decreasePerson = () => ({type:"DECREASE_PERSON"});
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

export const store = createStore(personReducer, 0, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());