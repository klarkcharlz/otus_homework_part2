import {fireEvent, render, screen} from '@testing-library/react';
import ControlForm from '../../components/ControlForm/ControlForm';

test('From element: exist in the DOM', () => {
    const setSettings = (widthValue: number, heightValue: number) => {
        expect(widthValue).toEqual(Number(200));
        expect(heightValue).toEqual(Number(200));
    };
    render(<ControlForm logOut={() => {}} reset={() => {}} setPlayMode={() => {}} speed={2} setSettings={setSettings} width={200} height={200}/>)
    const elem = screen.getByText<HTMLElement>('Save');
    expect(elem).toBeInTheDocument();
});
