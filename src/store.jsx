import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { v4 as uuidv4 } from "uuid";

const ADD = "ADD";
const DELETE = "DELETE";

// Action creators
const addToDo = (text) => ({
    type: ADD,
    text,
});

const deleteToDo = (id) => ({
    type: DELETE,
    id,
});

// Initial state
const initialState = {
    todos: [], 
};

// Reducer
const handleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            if (!action.text || action.text.trim() === "") return state; // Avoid adding empty todos
            return {
                ...state,
                todos: [{ text: action.text, id: uuidv4() }, ...state.todos],
            };
        case DELETE:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        default:
            return state;
    }
};

// Persist configuration
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, handleReducer);

// Configure store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

// Export action creators
export const actionCreators = {
    addToDo,
    deleteToDo,
};
