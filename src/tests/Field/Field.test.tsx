import {render} from '@testing-library/react';
import Field from '../../components/Field/Field';
import { Provider } from 'react-redux';
import {store} from './../../redux/store';

test('From element: exist in the DOM', () => {
    const cells = 100;
    const runGame = true;
    const {container} = render(
        <Provider store={store}>
            <Field logOut={() => {}} setRunGame={() => {}} runGame={runGame}/>
        </Provider>

    )
    const elems = container.getElementsByClassName('cell');
    expect(elems.length).toBe(cells);
});
