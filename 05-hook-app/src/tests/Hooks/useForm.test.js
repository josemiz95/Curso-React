import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useForm', () => {
	const initialForm = { name: "Josemi", email: "josemiz95" };

	test('Should return default values', () => {
		// Arragne
		const {result} = renderHook(() => useForm(initialForm));
		const [value,,] = result.current;

		// Assert
		expect(value).toEqual(initialForm);
	});

	
	test('Should return changed values', () => {
		// Arragne
		const newValue = "Nombre cambiado";
		const {result} = renderHook(() => useForm(initialForm));
		const [,handleInputChange,] = result.current;

		// Act
		const target ={name:"name", value:newValue}
		act(()=> handleInputChange({target}));
		const [value,,] = result.current;

		// Assert
		expect(value.name).toBe(newValue);
	});

	test('Should return changed values', () => {
		// Arragne
		const newValue = "Nombre cambiado";
		const {result} = renderHook(() => useForm(initialForm));
		const [,handleInputChange,reset] = result.current;

		// Act
		const target ={name:"name", value:newValue}
		act(()=> handleInputChange({target}));
		const [changedValue,,] = result.current;

		act(()=> reset());
		const [resetedValue,,] = result.current;

		// Assert
		expect(changedValue.name).toBe(newValue);
		expect(resetedValue.name).toBe(initialForm.name);
	});
});