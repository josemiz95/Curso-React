import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../hooks/useCounter";

describe('Tests for useCounter', () => {
	test('Should return default values', () => {
		const {result} = renderHook(() => useCounter());
		expect(result.current.state).toBe(1);
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.operate).toBe('function');
		expect(typeof result.current.reset).toBe('function');
	});

	test('Should return setted values', () => {
		const initialValue = 100;
		const {result} = renderHook(() => useCounter(initialValue));

		expect(result.current.state).toBe(initialValue);
	});

	test('Should increment the value', () => {
		// Arrange
		const incrementNumber = 2;
		const {result} = renderHook(() => useCounter());
		const {state:initialValue, increment} = result.current;

		// Act
		act(() => increment(incrementNumber));
		const {state:resultValue} = result.current;

		// Assert
		expect(initialValue).toBe(1);
		expect(resultValue).toBe(initialValue+incrementNumber);
	});

	test('Should decrement the value', () => {
		// Arrange
		const decrementNumber = 2;
		const {result} = renderHook(() => useCounter());
		const {state:initialValue, decrement} = result.current;

		// Act
		act(() => decrement(decrementNumber));
		const {state:resultValue} = result.current;

		// Assert
		expect(initialValue).toBe(1);
		expect(resultValue).toBe(initialValue-decrementNumber);
	});

	test('Should add the value', () => {
		// Arrange
		const operateNumber = -2;
		const {result} = renderHook(() => useCounter());
		const {state:initialValue, operate} = result.current;

		// Act
		act(() => operate(operateNumber));
		const {state:resultValue} = result.current;

		// Assert
		expect(initialValue).toBe(1);
		expect(resultValue).toBe(initialValue+operateNumber);
	});

	test('Should reset the value', () => {
		// Arrange
		const incrementNumber = 100;
		const {result} = renderHook(() => useCounter());
		const {state:initialValue, increment, reset} = result.current;

		// Act
		act(() => increment(incrementNumber));
		const {state:incrementedValue} = result.current;

		act(() => reset());
		const {state:resetedValue} = result.current;

		// Assert
		expect(initialValue).toBe(1);
		expect(incrementedValue).toBe(initialValue+incrementNumber);
		expect(resetedValue).toBe(1);
	});
});