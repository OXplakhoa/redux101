import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const toDo = createSlice({
    name:"toDosReducer",
    initialState: [],
    reducers: {
        add:(state,action) => {
            state.push({text: action.payload,id: uuidv4()})
        },
        remove:(state,action) => state.filter((s) => s.id !== action.payload)
    }
})

export const store = configureStore({
    reducer: toDo.reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
    devTools: composeWithDevTools({ trace: true }), 
});

export const {add,remove} = toDo.actions
