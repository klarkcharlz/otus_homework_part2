import {render, screen} from '@testing-library/react';
import Register from '../../components/Register/Register';

test('From element: exist in the DOM', () => {
    const cells = 60;

    render(<Register setRunGame={()=>{}} saveData={()=>{}} cells={cells}/>)
    const elem = screen.getByText<HTMLElement>(`Please set cells number(current set: ${cells})`);
    expect(elem).toBeInTheDocument();
});
