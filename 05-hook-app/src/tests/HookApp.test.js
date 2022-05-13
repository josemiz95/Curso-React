import { shallow } from "enzyme";
import HookApp from "../HookApp";


describe('Test <HookApp/>', () => {
    test('Should coincide with snapshoot', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
});