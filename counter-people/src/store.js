import {createStore} from 'redux'

export const addPerson = () => ({type:"ADD_PERSON"})
export const decreasePerson = () => ({type:"DECREASE_PERSON"});


export const personReducer = (state, action) => {
    if(action.type === "ADD_PERSON"){
        return state + 1;
    }
    if(action.type === "DECREASE_PERSON"){
        return state > 0 ? state - 1: state;
    }   
    return state;
}

export const store = createStore(personReducer, 0, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());