import { types } from "../types";


export const authReducer = (state = {}, {type, payload}) => {
	switch(type) {
		case types.login:
			return {
				...payload,
				logged: true,
			}
		case types.logout:
			return {
				logged: false,
			}
		default:
			return state;
	}
}