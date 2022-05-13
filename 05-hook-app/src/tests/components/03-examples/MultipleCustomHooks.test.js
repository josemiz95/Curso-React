import {shallow}  from "enzyme"
import {MultipleCustomHooks}  from "../../../components/03-examples/MultipleCustomHooks";
import {useFetch}  from "../../../hooks/useFetch";

jest.mock('../../../hooks/useFetch');

describe('Test on <MultipleCustomHooks />', () => { 
	test('should be shown correctly', () => { 
		useFetch.mockReturnValue({ data: null, loading: true, error: null });

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper).toMatchSnapshot();
	});

	test('should to show the info', () => { 
		useFetch.mockReturnValue({
			data: [{
				author: 'Josemi',
				quote: 'Hola Mundo'
			}],
			loading: false,
			error: null
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.quote').text().trim()).toBe('Hola Mundo');
		expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Josemi');

	});
});