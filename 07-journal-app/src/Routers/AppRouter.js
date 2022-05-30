import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Journal } from '../views/journal/Journal';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
	<BrowserRouter>
	  	<div>
			<Routes>
				<Route path="/auth/*" element={<AuthRouter />} />
				<Route path="/" element={<Journal />} />

				<Route path="/*" element={<Navigate to="/auth/login" />} />
			</Routes>
		</div>
	</BrowserRouter>
  )
}
