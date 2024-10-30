import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => { 
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        addToDo(text); 
        setText("");
    };

    return (
        <div>
            <h1>TODO !</h1>
            <form onSubmit={onSubmit}>
                <input 
                    value={text} 
                    onChange={onChange} 
                    style={{ margin: "5px" }} 
                    type="text" 
                    placeholder="What to do today ?" 
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { toDos: state }; 
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
