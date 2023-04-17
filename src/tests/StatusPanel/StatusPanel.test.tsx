import {render, screen} from '@testing-library/react';
import StatusPanel from '../../components/StatusPanel/StatusPanel';
import { Provider } from 'react-redux';
import {store} from './../../redux/store';

test('From element: exist in the DOM', () => {
    const width = 200;
    const height = 200;
    const speed = 2;
    const run = true;
    render(
        <Provider store={store}>
            <StatusPanel width={width} height={height} speed={speed} run={run}/>
        </Provider>
    )

    const elem = screen.getByText<HTMLElement>(`width: ${width}; height: ${height}; speed: ${speed}; game: ${run ? 'ON': 'OFF'}`);
    expect(elem).toBeInTheDocument();
});
