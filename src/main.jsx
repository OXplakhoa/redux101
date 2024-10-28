import { configureStore } from "@reduxjs/toolkit";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul")

const ADD = "add";
const DELETE = "delete";

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
  switch(action.type){
    case ADD:
      return [{text: action.text, id: Date.now() },...state];
    case DELETE:
      return [];
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    state: handleReducer
  }
})

const addTodo = (text) => {
  store.dispatch(handleAdd(text))
}
const deleteTodo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(handleDelete(id))
}

store.subscribe(() => console.log(store.getState().state))

const paintTodos = () => {
  ul.innerHTML = ""
  const toDos = store.getState().state;
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click",deleteTodo)
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintTodos);



const createTodo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  addTodo(toDo);
  input.value = "";
}

form.addEventListener("submit",handleSubmit);