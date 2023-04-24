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
    const stateSpeed = useSelector(
        (state: StateType) => state.speed
    );
    const stateFilling = useSelector(
        (state: StateType) => state.filling
    );

    const [cellsInLine, setCellsInLine] = useState(stateCells);
    const [name, setName] = useState(stateName);
    const [filling, setFilling] = useState(stateFilling);
    const [speed, setSpeed] = useState(stateSpeed);

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
        } else if(filling < 10) {
            setStatus('Не рекомендуется ставить стартовый процент заполнения поля меньше 10 процентов!')
        } else if(speed < 1){
            setStatus('Скорость не может быть меньше 1')
        } else {
            saveData(name, cellsInLine, filling, speed);
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
            <label htmlFor="filling">
                field completion percentage
            </label>
            <input
                id='filling'
                name='filling'
                value={filling}
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => {
                        setFilling(Number(e.target.value));
                    }
                }
                type="number"/>
            <label htmlFor="speed">
                Speed
            </label>
            <input
                id='speed'
                name='speed'
                value={speed}
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => {
                        setSpeed(Number(e.target.value));
                    }
                }
                type="number"/>
            <button className={classes.button8} onClick={saveAndStart}>
                Save and Start Game
            </button>
        </div>
    );
}

export default Register;
