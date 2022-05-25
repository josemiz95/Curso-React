import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../views/auth/Login';
import { Register } from '../views/auth/Register';

export const AuthRouter = () => {
  return (
	<div className='auth__main'>
		<div className='auth__box-container'>
			<Switch>
				<Route exact path="/auth/login" component={Login} />
				<Route exact path="/auth/register" component={Register} />

				<Redirect to="/auth/login" />
			</Switch>
		</div>
	</div>
  )
}
