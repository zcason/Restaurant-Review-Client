import AddRestaurant from './AddRestaurant';

import { shallow } from 'enzyme';

const SetState = {};

it('renders without crashing', () => {
    shallow(<AddRestaurant SetState={SetState} />);
});