import React from "react";
import { connect } from "react-redux";

function Detail({toDos}) {
    return (
        <div>
            <h1>Details: </h1>
            {toDos.map((toDo) => (
                <ul key={toDo.id}>
                    <li >{toDo.text}</li>
                </ul>
            ))}
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    return {toDos: state}
}

export default connect (mapStateToProps) (Detail)