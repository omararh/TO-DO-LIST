import React, {useState} from 'react'
import '../components/main.scss';
import Form from '../components/form';
import ToDoList from '../components/toDoList';

const Main = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]); 
    const [query, setQuery] = useState(""); 
    return (
        <div>
            <header className = "title" >TO-DO LIST</header>
              {
                 (todos.length > 0) &&  <input type="text" className="searchBar" placeholder = "Recherche" onChange = {e => setQuery(e.target.value)}/>
              }
            <div className = "list-form">
                <ToDoList todos = {query === '' ? todos : todos.filter(item => item.taskTitle.toLowerCase().includes(query.toLowerCase()))}  setTodos = {setTodos}/>
                <Form  
                   inputText = {inputText} 
                   todos = {todos} 
                   setTodos =  {setTodos}
                   setInputText = {setInputText} /> 
            </div>
        </div>
    )
}

export default Main;
