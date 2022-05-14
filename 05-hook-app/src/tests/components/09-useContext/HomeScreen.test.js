import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('test on <HomeScreen />', () => {
	const user = {name: "Josemi", email: "josemiz95"}

	const wrapper = mount(
		<UserContext.Provider value={user}>
			<HomeScreen />
		</UserContext.Provider>
	);

	test('should show the component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});