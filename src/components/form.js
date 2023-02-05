import React from 'react';
import {v4} from 'uuid';
import '../components/form.scss';


const Form = ({setInputText, setTodos, todos, inputText}) => {
    const inputTextHandler = (e) => setInputText(e.target.value);
    
    const submitTodoHandler = (e) => { 
        e.preventDefault();
        if(inputText === '') {
            window.alert("your task title can't be empty !");
            return;
        }
        setTodos([...todos, {taskTitle : inputText , taskState : 'A faire', color : '#AFEEEE', id : v4()}])
        setInputText('');
    }

    
    return (
        <div  className = "form">
             <form>
                 <button onClick = {submitTodoHandler} className="todo-button" type="submit">
                     <i className="fas fa-plus-square"></i>
                 </button>
                 <input value = {inputText} onChange = {inputTextHandler} type="text" className="toDoinput" placeholder="Ajouter une tache"/>
            </form>
        </div>
    );
}


export default Form;