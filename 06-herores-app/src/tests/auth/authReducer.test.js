import { authReducer } from "../../auth/authReducer";
import { types } from "../../types";


describe('Test in authReducer', () => {
	test('should return default state', () => {
		const state = authReducer(undefined, {});
		expect(state).toEqual({ logged: false });
	});

	test('should user name with loggin', () => {
		const [name, logged] = ['test', true];

		const action = {
			type: types.login,
			payload: { name }
		};

		const state = authReducer(undefined, action);

		expect(state).toEqual({ name , logged });
	});

	test('should delete name and return logged as false', () => {
		const action = {
			type: types.logout,
			payload: {}
		};

		const {logged} = authReducer({}, action);

		expect(logged).toBe(false);
	});
});