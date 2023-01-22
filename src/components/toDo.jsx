import React, {useState} from 'react'
import Select from 'react-select';

const ToDo = ({todo,todos, setTodos}) => {
    const deleteHandler = () => setTodos(todos.filter((el) => el.id !== todo.id));
   
    const completedHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {...item, completed : !item.completed}
            }
            return item;
        }))
    }

    const [selected, setSelected] = useState(null);

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }

    const options = [
        { value: 'toDo', label: 'A faire' },
        { value: 'done', label: 'Fait' },
        { value: 'inProgress', label: 'En cours' },
        { value: 'late', label: 'En retard' }
      ]
      
    return (
        <div>
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "completed" : ""}` }>{todo.text}</li>
                <span className={`state ${todo.completed ? "stateCompleted" : ""}` } >{todo.completed ? "Fait" : "A faire"}</span>
                    <button onClick = {completedHandler} className = "complete-btn"> 
                         <i className ="fas fa-edit"></i>
                    </button>
                    <button onClick = {deleteHandler} className = "trash-btn">
                        <i className = "fas fa-trash" ></i>
                    </button>
                    <Select options={options} defaultValue={options[0]} onChange={handleChange} />
            </div>
            
        </div>
    )
}

export default ToDo;
