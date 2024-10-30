import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({text,deleteToDo,id}){ 
    return (
        <div>
            <Link to={`/${id}`}>
                <li>
                    {text} 
                </li>
            </Link>
            <button onClick={deleteToDo}>DELETE</button> 
        </div>
    )
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null,mapDispatchToProps) (ToDo)