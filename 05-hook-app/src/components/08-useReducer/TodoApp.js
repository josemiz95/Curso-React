import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { TodoList } from './Components/TodoList';
import { TodoForm } from './Components/TodoForm';

const init = () => {
    const todos = localStorage.getItem('todos');
    return JSON.parse(todos) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (description) => {
        const newTodo = { id: new Date().getTime(), desc: description, done:false }

        dispatch({ type: 'add', payload: newTodo });
    }

    const handleDelete = (todoId) => dispatch({ type: 'delete', payload: todoId });

    const handleToggle = (todoId) => dispatch({ type: 'toggle', payload: todoId});

    return (
        <div>
            <h1> TodoApp: {todos.length} </h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className='col-5'>
                    <h4>Agregar todo</h4>
                    <hr />
                    <TodoForm handleAddTodo={handleAddTodo} />                    
                </div>
            </div>
        </div>
    )
}
