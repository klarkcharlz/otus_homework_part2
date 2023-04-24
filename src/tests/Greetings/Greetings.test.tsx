import {render, screen} from '@testing-library/react';
import Greetings from '../../components/Greetings/Greetings';
import { Provider } from 'react-redux';
import {store} from './../../redux/store';

test('From element: exist in the DOM', () => {
    render(
        <Provider store={store}>
            <Greetings/>
        </Provider>
    )
    const elem = screen.getByText<HTMLElement>(`Welcome`);
    expect(elem).toBeInTheDocument();
});
