import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../../components/CounterApp';

describe('Pruebas de <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('<CounterApp /> debe renderizarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
    });

    test('<CounterApp /> debe mostrar el contador a 0 por defecto', () => {
        const wrapper = shallow(<CounterApp />);
        const counter = wrapper.find('h2'); // Es importante evitar esto, puede dar problemas
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe("0");
    });
    
    test('<CounterApp /> debe mostrar el contador con el numero que pasemos', () => {
        const value = 100;

        const wrapper = shallow(<CounterApp numero={value}/>);
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe(value.toString());
    });

    test('<CounterApp /> debe incrementar el contador', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('1');
    });

    test('<CounterApp /> debe disminuir el contador', () => {
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('-1');
    });

    test('<CounterApp /> debe disminuir el contador', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        const counterTextBefore = wrapper.find('h2').text().trim();

        wrapper.find('button').at(1).simulate('click');
        const counterTextAfter = wrapper.find('h2').text().trim();

        expect(counterTextBefore).toBe("2");
        expect(counterTextAfter).toBe("0");
    });
});