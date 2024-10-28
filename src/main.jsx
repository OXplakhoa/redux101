import { configureStore } from "@reduxjs/toolkit";

const plus = document.getElementById("add");
const neg = document.getElementById("minus");
const span = document.querySelector("span");
span.innerText = 0;

const add = "add";
const minus = "minus";

const handleCount = (count = 0,action) => {
  switch (action.type) {
    case add:
      return count+1;
    case minus:
      return count-1;
    default:
      return count;
  }
}

const countStore = configureStore({
  reducer: {
    c: handleCount
  }
})

const onChange = () => {
  span.innerText = countStore.getState().c;
}

countStore.subscribe(onChange)

const handleAdd = () => {
  countStore.dispatch({type: add})
}
const handleMinus = () => {
  countStore.dispatch({type: minus})
}

plus.addEventListener("click",handleAdd);
neg.addEventListener("click",handleMinus);