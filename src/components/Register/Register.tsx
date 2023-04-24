import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {StateType} from './../../redux/actions';
import classes from './Register.module.scss';
import useStatusModalHook from "../../hooks/useStatusModalHook";

type RegisterProps = {
    saveData: Function,
    setRunGame: Function,
};


function Register({setRunGame, saveData}: RegisterProps) {
    const navigate = useNavigate();
    const setStatus = useStatusModalHook();
    const stateName = useSelector(
        (state: StateType) => state.name
    );
    const stateCells = useSelector(
        (state: StateType) => state.cells
    );

    const [cellsInLine, setCellsInLine] = useState(stateCells);
    const [name, setName] = useState(stateName);

    const minimum = 3;

    useEffect(() => {
        if(cellsInLine && name) {
            navigate('/game');
        }
    }, []);

    const saveAndStart = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if(!name){
            setStatus('Пожалуйста введите имя!')
        } else if(cellsInLine < minimum){
            setStatus('Пожалуйста введи больше 3 ячеек!')
        } else {
            saveData(name, cellsInLine);
            setRunGame(true);
            navigate('/greet')
        }
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
                Cells in line(minimum: {minimum})
            </label>
            <input
                id='cells'
                name='cells'
                value={cellsInLine}
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => {
                        setCellsInLine(Number(e.target.value));
                    }
                }
                type="number"/>
            <button onClick={saveAndStart}>
                Save and Start Game
            </button>
            <p>Please set cells number(current set: {stateCells})</p>
        </div>
    );
}

export default Register;
