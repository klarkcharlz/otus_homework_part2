import {render, screen} from '@testing-library/react';
import Field from '../../components/Field/Field';
import { Provider } from 'react-redux';
import {store} from './../../redux/store';

test('From element: exist in the DOM', () => {
    const cells = 50;
    const runGame = true;
    render(
        <Provider store={store}>
            <Field logOut={() => {}} setRunGame={() => {}} runGame={runGame}/>
        </Provider>

    )
    for(let i = 0; i < cells; i++) {
        expect(screen.getByText<HTMLElement>(`${i+1}`)).toBeInTheDocument();
    }
});
