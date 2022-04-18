import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from '../../components/PrimeraApp';

describe('Pruebas en <PrimeraApp />', () =>{
    test('Debe mostrar hola Josemi', () =>{
		const nombre = 'Josemi';
		const wrapper = render(<PrimeraApp nombre={nombre}/>);

		expect(wrapper.getByText(`Hola ${nombre}`)).toBeInTheDocument();
	});
});