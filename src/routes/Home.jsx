import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

const Home = ({ todos, addToDo }) => { 
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with text:", text); 
        if (text.trim() === "") return; 
        addToDo(text);
        setText("");
    };

    // Ensure todos is an array
    const todoArray = todos.filter(todo => todo && todo.id && todo.text);


    return (
        <div>
            <h1>TODO!</h1>
            <form onSubmit={onSubmit}>
                <input 
                    value={text} 
                    onChange={onChange} 
                    style={{ margin: "5px" }} 
                    type="text" 
                    placeholder="What to do today?" 
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todoArray.map((todo) => (
                    <ToDo key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("Redux State:", JSON.stringify(state, null, 2)); // Debugging
    return { todos: state.todos }; // Access the todos from the state
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
