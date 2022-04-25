import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas del componente <GiftGridItem />', () => {
    const title = 'Titulo';
    const image = 'https://google.com';
    const wrapper = shallow(<GifGridItem title={title} image={image}/>);

    test('El componente es renderizado correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el titulo', ()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tener src y alt', () => { 
       const img = wrapper.find('img');
       const props = img.props();
       
       expect(img.prop('src')).toBe(image);
       expect(props.alt).toBe(title);
    });

    test('debe tener animate__fadeIn', () => { 
        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
});