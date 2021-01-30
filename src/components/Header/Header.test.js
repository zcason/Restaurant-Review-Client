import Header from './Header';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Header />);
});