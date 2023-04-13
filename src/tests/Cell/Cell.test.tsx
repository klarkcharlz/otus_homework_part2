import {fireEvent, render, screen} from '@testing-library/react';
import Cell from '../../components/Cell/Cell';

test('From element: exist in the DOM', () => {
    const id = 3;
    const active = false;
    render(<Cell active={active} id={id} speed={2} width={200} height={200}/>)
    const elem = screen.getByText<HTMLElement>(`${3}`);
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('hidden');
    fireEvent.click(elem);
    expect(elem).toHaveClass('visible');
});
