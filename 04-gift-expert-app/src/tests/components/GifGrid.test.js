import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid/>', () => {
    const category = 'One punch';

    test('debe mostrarse correctamente', () => { 
        useFetchGifs.mockReturnValue([ [], true ]);

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes', ()=>{
        const gifs = [{
            id: 'ABC',
            title: 'Titulo',
            image: 'https://algo.com'
        }];

        useFetchGifs.mockReturnValue([ gifs, false ]);
        
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});