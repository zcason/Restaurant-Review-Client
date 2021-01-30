import ReviewForm from './ReviewForm';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<ReviewForm />);
});