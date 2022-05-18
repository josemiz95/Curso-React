import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types';

export const LoginScreen = () => {

	const authContext = useContext(AuthContext);

	const navigate = useNavigate();

	const handleLogin = () => {
		const action = {
			type: types.login,
			payload: { name: 'Josemi' }
		}

		authContext.dispatch(action);
		navigate('/', { replace: true });
	};

	return (
		<div className='container mt-5'>
			<h1>Login Screen</h1>
			<hr />

			<button className='btn btn-primary' onClick={handleLogin}>Login</button>
		</div>
	)
}
