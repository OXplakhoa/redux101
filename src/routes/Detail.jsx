import React from "react";
import { connect } from "react-redux";

function Detail({toDos}) {
    const ArrayToDos = Object.values(toDos)[0];
    console.log(ArrayToDos);
    return (
        <div>
            <h1>Details: </h1>
            {ArrayToDos.map((todo) => (
                <h1 key={todo.id}>{todo.text}</h1>
            ))}
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    return {toDos: state}
}

export default connect (mapStateToProps) (Detail)