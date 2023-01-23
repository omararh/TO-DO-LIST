import React, {useState} from 'react'
import './toDo.scss';

const ToDo = ({todo,todos, setTodos}) => {
    const [index, setIndex] = useState(0);

    const deleteHandler = () => setTodos(todos.filter((el) => el.id !== todo.id));
   
    const options = [
        { value: 'toDo', label: 'A faire',color : 'blue' },
        { value: 'done', label: 'Fait',color : 'green' },
        { value: 'inProgress', label: 'En cours' ,color : '#FFD700'},
        { value: 'late', label: 'En retard',color : 'red' }
      ]


    const handleChange =  () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                (index + 1 === options.length) ? setIndex(0) : setIndex(index + 1);
                return {...item, taskState :  options[index + 1 === options.length ? 0 : index + 1].label, color : options[index + 1 === options.length ? 0 : index + 1].color} 
            }    
            return item;
        }))
    }

    console.log(index, "index___");
   
    return (
        <div className = "toDo">
           <div className = "toDoTable">        
                <p className= "taskTitle">{todo.taskTitle}</p>
                <p style={{color: todo.color}}  className= "taskState" >{todo.taskState}</p>
                <div className = "icons">    
                    <button onClick = {handleChange} className = "updateState-btn">
                        <i className = "fas fa-trash" ></i>
                    </button>
                    <button onClick = {deleteHandler} className = "trash-btn">
                        <i className = "fas fa-trash" ></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;
