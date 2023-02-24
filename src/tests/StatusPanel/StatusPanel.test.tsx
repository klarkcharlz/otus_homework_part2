const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import {render, screen} from '@testing-library/react';
import StatusPanel from '../../components/StatusPanel/StatusPanel';

test('From element: exist in the DOM', () => {
    const width = 200;
    const height = 200;
    const speed = 2;
    const run = true;
    render(<StatusPanel width={width} height={height} speed={speed} run={run}/>)
    const elem = screen.getByText<HTMLElement>(`width: ${width}; height: ${height}; speed: ${speed}; game: ${run ? 'ON': 'OFF'}`);
    expect(elem).toBeInTheDocument();
});
