import React from 'react'

export const TodoItem = ({todo, handleDelete, handleToggle}) => {
    return (
        <li className="list-group-item">
            <p className={`${todo.done && 'complete'}`} onClick={() => {handleToggle(todo.id)}}>{todo.desc}</p>
            <button className='btn btn-danger' onClick={()=> {handleDelete(todo.id)}}>Borrar</button>
        </li> 
    )
}
