import { configureStore, createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")


const handleReducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            return [{ text: action.payload, id: uuidv4() }, ...state];
        case deleteToDo.type:
            console.log(action);
            return state.filter((s) => s.id !== action.payload);
        default:
            return state;
    }
};

export const store = configureStore({
    reducer: handleReducer
});

export const actionCreators = {
    addToDo,
    deleteToDo
};
