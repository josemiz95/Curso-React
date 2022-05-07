import React from 'react';
import { useForm } from '../../../hooks/useForm';

export const TodoForm = ({handleAddTodo}) => {
    const [{description}, inputChange,reset] = useForm({description:''});

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(description.trim() === '') return;
        
        handleAddTodo(description);
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="Tarea" autoComplete="off" className='form-control'
                value={description} onChange={inputChange} />
            <button type='submit' className='btn btn-outline-success mt-1 btn-block'>Agregar</button>
        </form>
    )
}
