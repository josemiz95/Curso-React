import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routes/AppRouter";

describe('test for AppRouter', () => {
	const contextValue = {
		user:{ logged: false }
	};

	it('should render login if not authenticated', () => {
		// NOTE: Not working with react 18

		// const wrapper = mount(
		// 	<AuthContext.Provider value={contextValue}>
		// 		<AppRouter />
		// 	</AuthContext.Provider>
		// );

		// expect(wrapper).toMatchSnapshot();
		// expect(wrapper.find('h1').text().trim()).toBe('Login');
	});

	it('should render dashboard if authenticated', () => {
		// NOTE: Not working with react 18
		
		// const wrapper = mount(
		// 	<AuthContext.Provider value={{ user: { logged: true } }}>
		// 		<AppRouter />
		// 	</AuthContext.Provider>
		// );

		// expect(wrapper).toMatchSnapshot();
		// expect(wrapper.find('.navbar').exists()).toBeTruthy();
	});
});