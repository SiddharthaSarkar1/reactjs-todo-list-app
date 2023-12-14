import React from 'react'

const TodoItem = ({todo, onDelete}) => {
    return (
        <>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>delete</button><hr />
        </>
    )
}

export default TodoItem;