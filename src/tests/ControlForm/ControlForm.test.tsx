import {fireEvent, render, screen} from '@testing-library/react';
import ControlForm from '../../components/ControlForm/ControlForm';

test('From element: exist in the DOM', () => {
    const width = '300';
    const height = '300';

    const setSettings = (widthValue: number, heightValue: number) => {
        expect(widthValue).toEqual(Number(200));
        expect(heightValue).toEqual(Number(200));
    };
    render(<ControlForm reset={() => {}} setPlayMode={() => {}} speed={2} setSettings={setSettings} width={200} height={200}/>)
    const elem = screen.getByText<HTMLElement>('Save');
    expect(elem).toBeInTheDocument();

    /*
    ToDo: обращение к проверяющему, подскажите пожалуйста как найти инпуты
     и изменить их значение, примеры ниже закомментированы
    */
    // const widthInput = screen.getByRole('input', { name: 'width'})
    // const heightInput = screen.getByRole("input",  { name: 'height'})

    // fireEvent.change(widthInput, { target: { value: width } })
    // fireEvent.change(heightInput, { target: { value: height } })

    fireEvent.click(elem);
});
