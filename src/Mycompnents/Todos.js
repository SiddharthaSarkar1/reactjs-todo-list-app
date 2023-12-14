import React from 'react'
import TodoItem from './TodoItem'

export const Todos = (props) => {
    return (
        <>
           <div className="container">
               <h3 className="my-3 text-primary">ToDo List</h3>
               {console.log(props.todos.length)}
               {props.todos.length===0 ? "No ToDo to display": 
               props.todos.map((todo) => {
                   return <TodoItem todo={todo}  key={todo.sno} onDelete={props.onDelete}/>
               })
               }
           </div>
        </>
    )
}

export default Todos;