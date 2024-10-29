import { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
    console.log(toDos);
    const [text, setText] = useState("");
    
    const onChange = (e) => {
        setText(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        // Here you might want to dispatch an action to add the new toDo
        setText("");
    }
    
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
                {JSON.stringify(toDos.state)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { toDos: state }
}

export default connect(mapStateToProps)(Home);
