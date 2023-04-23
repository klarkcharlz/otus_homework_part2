import React, {ChangeEvent, MouseEvent, useState, useEffect} from 'react';
import classes from './ControlForm.module.scss';
import {useNavigate} from "react-router-dom";


type ControlFormProps = {
    setSettings: Function,
    setPlayMode: Function,
    logOut: Function,
    reset: Function,
    speed: number
};


const ControlForm = (
    {
        logOut,
        reset,
        setSettings,
        speed,
        setPlayMode
    }: ControlFormProps) => {
    const [animationSpeed, setAnimationSpeed] = useState(speed);
    const navigate = useNavigate();

    const saveSize = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setSettings(animationSpeed);
    };

    const stop = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setPlayMode(false);
    };

    const run = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setPlayMode(true);
    };

    const resetGame = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        reset();
    };

    const logout = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        logOut();
        navigate('/')
    };

    return (
        <>
            <div className={classes.control_form}>
                <label htmlFor="animationSpeed">
                    Speed
                </label>
                <input
                    id='animationSpeed'
                    name='animationSpeed'
                    value={animationSpeed}
                    onChange={
                        (e: ChangeEvent<HTMLInputElement>) => {
                            setAnimationSpeed(Number(e.target.value));
                        }
                    }
                    type="number"/>
                <button onClick={saveSize}>
                    Save
                </button>
            </div>
            <div className={classes.control_form}>
                <button type='button' onClick={stop}>
                    Stop
                </button>
                <button type='button' onClick={run}>
                    Start
                </button>
                <button type='button' onClick={resetGame}>
                    Reset
                </button>
                <button type='button' onClick={logout}>
                    Logout
                </button>
            </div>
        </>
    );
};

export default ControlForm;
