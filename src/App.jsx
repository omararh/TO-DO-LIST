import React, {useState} from 'react';
import '/Users/omararharbi/Desktop/toDoListApp/client/src/app.css';
import Form from './components/form';
import ToDoList from './components/toDoList';
//import Search from './components/search';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); 
  const [query, setQuery] = useState(""); 
  return ( 
    <div className="App">
     <header className = "title" >TO-DO LIST</header>
     <input type="text" className="searchBar" placeholder = "Recherche" onChange = {e => setQuery(e.target.value)}/>
     <ToDoList todos = {query === '' ? todos : todos.filter(item => item.text.toLowerCase().includes(query.toLowerCase()))}  setTodos = {setTodos}/>
     <Form  
         inputText = {inputText} 
         todos = {todos} 
         setTodos =  {setTodos}
         setInputText = {setInputText} /> 
      
    </div> 
  );
}

export default App;
