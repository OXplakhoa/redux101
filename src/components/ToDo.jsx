import React from "react";

export default function ToDo({text,id}){ //Need to destructure the props{} so that React know which key belongs to which value
    return (
        <div>
            <li key={id}>
                {text} <button>X</button> 
            </li>
        </div>
    )
}