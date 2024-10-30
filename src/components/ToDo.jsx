import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({text,onBtnClick,id}){ //Need to destructure the props{} so that React know which key belongs to which value
    return (
        <div>
            <Link to={`/${id}`}>
                <li>
                    {text} <button onClick={onBtnClick}>X</button> 
                </li>
            </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null,mapDispatchToProps) (ToDo)