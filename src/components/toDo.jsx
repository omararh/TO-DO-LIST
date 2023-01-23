import React from 'react'
import Select from 'react-select';
import '/Users/omararharbi/Desktop/toDoListApp/client/src/components/toDo.scss';

const ToDo = ({todo,todos, setTodos}) => {
    const deleteHandler = () => setTodos(todos.filter((el) => el.id !== todo.id));
   
    const options = [
        { value: 'toDo', label: 'A faire',color : 'blue' },
        { value: 'done', label: 'Fait',color : 'green' },
        { value: 'inProgress', label: 'En cours' ,color : '#FFD700'},
        { value: 'late', label: 'En retard',color : 'red' }
      ]

    const handleChange =  (selectedOption) => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {...item, taskState :  selectedOption.label, color : selectedOption.color} 
            }    
            return item;
        }))
    }

   

    return (
        <div className = "toDo">
           <div className = "toDoTable">        
                <p className= "">{todo.taskTitle}</p>
                <p style={{color: todo.color}}  className= "state" >{todo.taskState}</p>
                <div className = "icons">    
                    <Select options={options} defaultValue={options[0]} onChange={handleChange} className = "selector" />
                    <button onClick = {deleteHandler} className = "trash-btn">
                    <i className = "fas fa-trash" ></i>
                    </button>
                </div>

            </div>


        </div>
    )
}

export default ToDo;
