import {render} from '@testing-library/react';
import Cell from '../../components/Cell/Cell';

test('From element: exist in the DOM', () => {
    const lived = true;
    const {container} = render(<Cell lived={lived} speed={2} />)
    const elems = container.getElementsByClassName('cell live');
    expect(elems.length).toBe(1);
    expect(elems[0]).toBeInTheDocument();
});
