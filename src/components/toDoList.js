import React from 'react'
import Todo from './toDo';


const ToDoList = ( {todos, setTodos} ) => {
    return (
    <div className ="todo-container">
      <ul className ="todo-list">
        {
            todos.map(todo => (
                <Todo key = {todo.id }  todo = {todo} todos = {todos} setTodos = {setTodos} />
            ))
        }
      </ul>
    </div>
    )
}

export default ToDoList
