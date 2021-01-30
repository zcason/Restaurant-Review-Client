import Reviews from './Reviews';

import { shallow } from 'enzyme';

const reviews = [];

it('renders without crashing', () => {
    shallow(<Reviews reviews={reviews} />);
});