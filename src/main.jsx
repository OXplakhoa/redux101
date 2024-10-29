import { configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE =  "DELETE";

const handleAdd = (text) => {
  return {
    type: ADD,
    text
  }
}

const handleDelete = (id) => {
  return {
    type: DELETE,
    id
  }
}

const handleReducer = (state = [],action) => {
  switch (action.type) {
    case ADD:
      return [{text: action.text, id: uuidv4()},...state]
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    ToDoList: handleReducer
  }
})

const addToDo = (text) => {
  store.dispatch(handleAdd(text));
}

const deleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(handleDelete(id));
}

store.subscribe(() => console.log(store.getState().ToDoList))

const ToDo = () => {
  ul.innerHTML = "";
  const toDos = store.getState().ToDoList;
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "✖️";
    btn.addEventListener("click",deleteToDo);
    li.innerText = todo.text;
    li.id = todo.id;
    li.appendChild(btn);
    ul.appendChild(li);
  }) 
}

store.subscribe(ToDo);

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  addToDo(toDo);
  input.value = "";
}

form.addEventListener("submit",handleSubmit);