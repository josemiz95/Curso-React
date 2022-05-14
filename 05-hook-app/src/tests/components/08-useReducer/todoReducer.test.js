import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Test of todoReducer', () => {	
	test('should return the default state', () => { 
		const state = todoReducer(demoTodos, {});
		
		expect(state).toEqual(demoTodos);
	});

	test('should add a TODO', () => {
		const newTodo = { id:3, desc: 'Algo3', done: false };
		const action = {type: "add", payload: newTodo};

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(3);
		expect(state).toEqual([...demoTodos, newTodo]);
	});

	test('should delete a TODO', () => {
		const action = {type: "delete", payload: 1};

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(1);
		expect(state).toEqual(
			demoTodos.filter(todo => todo.id !== action.payload)
		);
	});

	test('should toggle a TODO', () => {
		const action = {type: "toggle", payload: 1};

		const state = todoReducer(demoTodos, action);

		expect(state.length).toBe(2);
		expect(state).toEqual(
			demoTodos.map(todo =>
                todo.id === 1
                ? {...todo, done: !todo.done}
                : todo
            )
		);
	});
});