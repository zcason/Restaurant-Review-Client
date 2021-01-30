import StarRating from './StarRating';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<StarRating />);
});