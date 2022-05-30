import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../views/auth/Login';
import { Register } from '../views/auth/Register';

export const AuthRouter = () => {
  return (
	<div className='auth__main'>
		<div className='auth__box-container'>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route path="/*" element={<Navigate to="/auth/login" />} />
			</Routes>
		</div>
	</div>
  )
}
