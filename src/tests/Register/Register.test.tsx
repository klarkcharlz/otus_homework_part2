import {render, screen} from '@testing-library/react';
import Register from '../../components/Register/Register';
import { Provider } from 'react-redux';
import {store} from './../../redux/store';

test('From element: exist in the DOM', () => {
    const cells = 10;

    render(
        <Provider store={store}>
            <Register setRunGame={()=>{}} saveData={()=>{}}/>
        </Provider>

    )
    const elem = screen.getByText<HTMLElement>(`Please set cells number(current set: ${cells})`);
    expect(elem).toBeInTheDocument();
});
