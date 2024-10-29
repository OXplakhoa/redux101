import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
    },
    {
        path: "/:id",
        element: <Detail/>
    }
])

function App(){
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;