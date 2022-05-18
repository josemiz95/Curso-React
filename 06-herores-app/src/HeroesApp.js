import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routes/AppRouter";

const init = () => { 
	// get from localStorage
	return JSON.parse(localStorage.getItem('auth')) || {logged: false};
}

export const HeroesApp = () => {

	const [user, dispatch] = useReducer(authReducer, {}, init);

	useEffect(() => {
		if(!user) return;

		localStorage.setItem('auth', JSON.stringify(user));
	}, [user]);

	return (
		<AuthContext.Provider value={{user, dispatch}}>
			<AppRouter />
		</AuthContext.Provider>
	)
}