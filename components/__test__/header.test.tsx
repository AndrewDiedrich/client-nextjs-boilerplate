import { mount } from 'enzyme';
import Header from '../header';

describe('index page', () => {
    it('should have App component', () => {
        const subject = mount(<Header />);

        expect(subject).toHaveLength(1);
    });
});

describe('button returns click event', () => {
    test.todo('should have App component');
});
