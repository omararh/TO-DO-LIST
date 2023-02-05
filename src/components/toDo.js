import React, {useState} from 'react'
import './toDo.scss';

const ToDo = ({todo,todos, setTodos}) => {
    const [index, setIndex] = useState(1);

    const deleteHandler = () => setTodos(todos.filter((el) => el.id !== todo.id));
   
    const options = [
        { value: 'toDo', label: 'A faire',color : '#AFEEEE' },
        { value: 'done', label: 'Fait',color : '#90EE90' },
        { value: 'inProgress', label: 'En cours' ,color : '#FFD700'},
        { value: 'late', label: 'En retard',color : 'red' }
      ]


    const handleChange =  () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                (index + 1  === options.length) ? setIndex(0) : setIndex(index + 1);
                return {...item, taskState :  options[index].label, color : options[index].color} 
            }    
            return item;
        }))
    }
   
    return (
        <div className = "toDo">
           <div className = "toDoTable">        
                <p className= "taskTitle">{todo.taskTitle}</p>
                    <p style={{"backgroundColor" : todo.color}}  className= "taskState" >{todo.taskState}</p>
                <div className = "icons">    
                    <button onClick = {handleChange} className = "updateState-btn">
                        <i className='fas fa-edit'></i>
                    </button>
                    <button onClick = {deleteHandler} className = "trash-btn">
                        <span>&#10060;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;
