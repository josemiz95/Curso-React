import { shallow } from "enzyme";
import { TodoItem } from "../../../components/08-useReducer/Components/TodoItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Test for <TodoItem/>', () => {
	const todo = demoTodos[0];
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	const wrapper = shallow(<TodoItem todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />);

	test('should show correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should trigger handleDelete', () => {
		wrapper.find('button').simulate('click');
		expect(handleDelete).toHaveBeenCalledWith(todo.id);
	});

	test('should trigger toggle', () => {
		wrapper.find('p').simulate('click');
		expect(handleToggle).toHaveBeenCalledWith(todo.id);
	});

	test('text should be show correctly', () => {
		const text = wrapper.find('p').text();
		expect(text).toBe(todo.desc);
	});

	test('should have the correct class when done', () => {
		todo.done = true;
		const wrapper = shallow(<TodoItem todo={todo}/>);
		expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
	});
});