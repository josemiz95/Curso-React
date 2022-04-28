import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en el componente <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target: {value}});

        const result = wrapper.find('input').get(0).props.value;

        expect(result).toBe(value);
    });

    test('No debe enviar la informacion en on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de ejecutar SetCategory y limpiar el input', () => {
        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', {target: {value}});
        const inputValueBefore = wrapper.find('input').get(0).props.value;

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        const inputValueAfter = wrapper.find('input').get(0).props.value;

        expect(inputValueBefore).toBe(value);
        expect(inputValueAfter).toBe('');
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

    });
});