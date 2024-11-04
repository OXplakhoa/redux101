import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({text,onBtnClick,id}){ //Need to destructure the props{} so that React know which key belongs to which value
    return (
        <div>
            <li>
                <Link to={`/${id}`}>
                    {text} 
                </Link>
                <button onClick={onBtnClick}>X</button> 
            </li>
        </div>
    )
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onBtnClick: () => dispatch(remove(ownProps.id))
    }
}

export default connect(null,mapDispatchToProps) (ToDo)