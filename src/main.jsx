import {configureStore } from '@reduxjs/toolkit'

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModify = (count = 0) => {
  count++;
  return count;
}

const countStore = configureStore({
  reducer: {
    count: countModify
  }
})

console.log(countStore.getState());