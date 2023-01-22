import React from 'react';
import {v4} from 'uuid';

const Form = ({setInputText, setTodos, todos, inputText}) => {
    const inputTextHandler = (e) => setInputText(e.target.value);
    
    const submitTodoHandler = (e) => { 
        e.preventDefault();
        setTodos([...todos, {text : inputText, completed : false, id : v4()}])
        setInputText('');
    }
    return (
        <form>
            <button onClick = {submitTodoHandler} className="todo-button" type="submit">
                     <i className="fas fa-plus-square"></i>
                </button>
            <input value = {inputText} onChange = {inputTextHandler} type="text" className="toDoinput" placeholder="Ajouter une tache"/>
        </form>
    );
}


export default Form;