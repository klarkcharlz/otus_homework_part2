const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import {render, screen} from '@testing-library/react';
import Greetings from '../../components/Greetings/Greetings';

test('From element: exist in the DOM', () => {
    const name = 'Mike';
    render(<Greetings name={name} />)
    const elem = screen.getByText<HTMLElement>(`Welcome ${name}`);
    expect(elem).toBeInTheDocument();
});
