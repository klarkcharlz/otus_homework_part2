import {render, screen} from '@testing-library/react';
import ControlForm from '../../components/ControlForm/ControlForm';

test('From element: exist in the DOM', () => {
    render(<ControlForm logOut={() => {}} reset={() => {}} setPlayMode={() => {}} speed={2} setSettings={() => {}}/>)
    const elem = screen.getByText<HTMLElement>('Save');
    expect(elem).toBeInTheDocument();
});
