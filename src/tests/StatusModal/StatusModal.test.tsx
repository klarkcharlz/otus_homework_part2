import {render, screen} from '@testing-library/react';
import StatusModal from '../../components/StatusModal/StatusModal';
import { Provider } from 'react-redux';
import {store} from './../../redux/store';

test('From element: exist in the DOM', () => {
    const open = true;
    const setOpen = () => {};
    const status = 'OK'
    render(
        <Provider store={store}>
            <StatusModal open={open} setOpen={setOpen} status={status}/>
        </Provider>
    )
    const elem = screen.getByText<HTMLElement>(status);
    expect(elem).toBeInTheDocument();
});
