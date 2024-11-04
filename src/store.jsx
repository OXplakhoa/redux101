import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

/*
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
*/

const handleReducer = createReducer([],(builder) => {
    builder
        .addCase(addToDo,(state,action) => {
            state.push({text: action.payload,id: uuidv4()})
        })
        .addCase(deleteToDo,(state,action) => state.filter((s) => s.id !== action.payload))
})

export const store = configureStore({
    reducer: handleReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
    devTools: composeWithDevTools({ trace: true }), 
});

export const actionCreators = {
    addToDo,
    deleteToDo
};
