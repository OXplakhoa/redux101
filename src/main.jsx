import {configureStore } from '@reduxjs/toolkit'

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModify = (count = 0, action) => {
  if(action.type === "add"){
    return count + 1;
  }else if (action.type === "minus"){
    return count - 1;
  }else {
    return count;
  }
}

number.innerText = 0;

const countStore = configureStore({
  reducer: {
    count: countModify
  }
})

const onChange = () => {
  number.innerText = countStore.getState().count;
}
 
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: "add"});
}
//dispatch send messages to countModify
const handleMinus = () => {
  countStore.dispatch({type: "minus"});
}

plus.addEventListener("click",handleAdd) 
minus.addEventListener("click",handleMinus)
