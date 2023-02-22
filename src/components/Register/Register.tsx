import React, {ChangeEvent, MouseEvent, useState} from 'react';
import classes from './Register.module.scss';

type RegisterProps = {
    saveData: Function,
    cells: number,
    setRunGame: Function
};


function Register({setRunGame, saveData, cells}: RegisterProps) {
    const [cellsCnt, setCellsCnt] = useState(cells);
    const [name, setName] = useState('');

    const saveAndStart = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        saveData(name, cellsCnt);
        setRunGame(true);
    }

    return (
        <div className={classes.register}>
            <label htmlFor="name">
                Name
            </label>
            <input
                id='name'
                name='name'
                value={name}
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => {
                        setName(e.target.value);
                    }
                }
                type="text"/>
            <label htmlFor="Cells">
                Cells
            </label>
            <input
                id='cells'
                name='cells'
                value={cellsCnt}
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => {
                        setCellsCnt(Number(e.target.value));
                    }
                }
                type="number"/>
            <button onClick={saveAndStart}>
                Save and Start Game
            </button>
            <p>Please set cells number(current set: {cells})</p>
        </div>
    );
}

export default Register;
