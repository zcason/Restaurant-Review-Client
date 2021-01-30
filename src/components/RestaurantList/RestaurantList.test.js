import RestaurantList from './RestaurantList';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<RestaurantList />);
});