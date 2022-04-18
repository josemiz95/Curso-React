import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from '../../components/PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () =>{
    test('Debe mostrar hola Josemi', () =>{
		const nombre = 'Josemi';
		
		const wrapper = render(<PrimeraApp nombre={nombre}/>);

		expect(wrapper.getByText(`Hola ${nombre}`)).toBeInTheDocument();
	});
});

describe('Pruebas en <PrimeraApp /> con Enzyme', () =>{
	test('Debe mostrar hola Josemi', () =>{
		const nombre = 'Josemi';
		
		const wrapper = shallow(<PrimeraApp nombre={nombre}/>);

		expect(wrapper).toMatchSnapshot(); // para verificar con su snapshot
	});

	test('Debe mostrar subtitulo', () =>{
		const nombre = 'Josemi';
		const subtitulo = 'Este es un subtitulo';
		
		const wrapper = shallow(<PrimeraApp nombre={nombre} subtitulo={subtitulo}/>);
		const textoParrafo = wrapper.find('p'); // es igual que querySelector

		expect(textoParrafo.text()).toBe(subtitulo);
	});
});