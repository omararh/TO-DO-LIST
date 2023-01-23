import React, {useState} from 'react';
import '/Users/omararharbi/Desktop/toDoListApp/client/src/app.scss';
import Form from './components/form';
import ToDoList from './components/toDoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); 
  const [query, setQuery] = useState(""); 
  return ( 
    <div className="App">
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
  );
}

export default App;
