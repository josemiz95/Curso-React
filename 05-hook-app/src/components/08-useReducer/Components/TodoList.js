import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {

    return (
        <ul className='list-group list-group-flush'>
            {todos.map(todo => 
                <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />
            )}
        </ul>
    )
}
