import { configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text
    };
};

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    };
};

const handleReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: uuidv4() }, ...state];
        case DELETE:
            return state.filter((s) => s.id !== action.id);
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
