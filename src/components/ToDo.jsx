import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({text,onBtnClick}){ //Need to destructure the props{} so that React know which key belongs to which value
    return (
        <div>
            <li>
                {text} <button onClick={onBtnClick}>X</button> 
            </li>
        </div>
    )
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null,mapDispatchToProps) (ToDo)