import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
	return (
		<>
			<h3 className='auth__title'>Register</h3>
			<form>
				<input type="text" placeholder='name' name='name' className='auth__input'/>
				<input type="text" placeholder='email' name='email' className='auth__input'/>
				<input type="password" placeholder='password' name='password' className='auth__input'/>
				<input type="password" placeholder='Confirm password' name='password2' className='auth__input'/>

				<button type='submit' className='btn btn-primary btn-block mb-1'>Login</button>

				<Link to='/auth/login' className="link mt-5">already registered?</Link>
			</form>
		</>
	)
}
