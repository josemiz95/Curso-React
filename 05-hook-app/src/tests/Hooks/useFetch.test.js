import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../hooks/useFetch";


describe('Test on useFetch', ()=>{
	test('Should have default values', () => {
		// Arrange
		const { result } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

		// Act
		const {data, loading, error} = result.current;

		// Assert
		expect(data).toBeNull();
		expect(loading).toBeTruthy();
		expect(error).toBeNull();
	});

	test('should have the expected info', async () => {
		// Arrange
		const { result } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

		// Act
		await waitFor(() => expect(result.current.loading).toBeFalsy(), {timeout: 10000});
		const {data, loading, error} = result.current;

		// Assert
		expect(data.length).toBe(1);
		expect(loading).toBeFalsy();
		expect(error).toBeNull();
	});

	test('should handle error', async () => {
		// Arrange
		const { result } = renderHook(() => useFetch(`https://reqres.in/error`));

		// Act
		await waitFor(() => expect(result.current.loading).toBeFalsy(), {timeout: 10000});
		const {data, loading, error} = result.current;

		// Assert
		expect(data).toBeNull();
		expect(loading).toBeFalsy();
		expect(error).toBe('Error');
	});
});