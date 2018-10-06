import { addPerson, decreasePerson, personReducer, cleanRoom, fullRoom } from './store'

describe("Actions suite", () => {
    it("should create a valid ADD_PERSON action", () => {
        expect(addPerson()).toEqual({type:"ADD_PERSON"});
    })

    it("should create a valid DECREASE_PERSON action", () => {
        expect(decreasePerson()).toEqual({type:"DECREASE_PERSON"});
    })
})

describe("Reducers suite", () => {
    it("should increment the state with ADD_PERSON action", () => {
        expect(personReducer(4, addPerson())).toBe(5);
    })

    it("should decrease the state with DECREASE_PERSON action", () => {
        expect(personReducer(8, decreasePerson())).toBe(7);
    })

    it("should clear the state with CLEAR_ROOM action", () => {
        expect(personReducer(4, cleanRoom())).toBe(0);
    })

    it("should set 10 to state with FULL_ROOM action", () => {
        expect(personReducer(3, fullRoom())).toBe(10);
    })

    it("should return the same state when DECREASE_PERSON action is executed and the state is equal to 0", () => {
        expect(personReducer(0, decreasePerson())).toBe(0);
    })

    it("should return the current state with a undefined action", () => {
        expect(personReducer(5, {type: "ABC"})).toBe(5);
    })
})