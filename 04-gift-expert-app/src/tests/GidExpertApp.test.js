const { shallow } = require("enzyme");
const { GifExpertApp } = require("../GifExpertApp");

describe('Pruebas en el componente',()=>{
    test('debe mostrarse correctamnte', () => { 
        const wrapper = shallow(<GifExpertApp/>) ;
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        const categories = ['One punch', 'Naruto'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});