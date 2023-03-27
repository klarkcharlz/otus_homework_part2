import {render, screen} from '@testing-library/react';
import Greetings from '../../components/Greetings/Greetings';

test('From element: exist in the DOM', () => {
    const name = 'Mike';
    render(<Greetings name={name} />)
    const elem = screen.getByText<HTMLElement>(`Welcome ${name}`);
    expect(elem).toBeInTheDocument();
});
