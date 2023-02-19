import {render, screen} from '@testing-library/react';
import Field from '../../components/Field/Field';

test('From element: exist in the DOM', () => {
    const cells = 50;
    render(<Field cells={cells}/>)
    for(let i = 0; i < cells; i++) {
        expect(screen.getByText<HTMLElement>(`${i+1}`)).toBeInTheDocument();
    }
});
