import React, {ChangeEvent, MouseEvent, useState} from 'react';
import classes from './ControlForm.module.scss';


type ControlFormProps = {
    setSettings: Function,
    setPlayMode: Function,
    reset: Function,
    width: number,
    height: number,
    speed: number
};


const ControlForm = ({reset, setSettings, width, height, speed, setPlayMode}: ControlFormProps) => {
    const [widthCell, setWidthCell] = useState(width);
    const [heightCell, setHeightCell] = useState(height);
    const [animationSpeed, setAnimationSpeed] = useState(speed);

    const saveSize = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setSettings(widthCell, heightCell, animationSpeed);
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

    return (
        <>
            <div className={classes.control_form}>
                <label htmlFor="width">
                    Width
                </label>
                <input
                    id='width'
                    name='width'
                    value={widthCell}
                    onChange={
                        (e: ChangeEvent<HTMLInputElement>) => {
                            setWidthCell(Number(e.target.value));
                        }
                    }
                    type="number"/>
                <label htmlFor="height">
                    Height
                </label>
                <input
                    id='height'
                    name='height'
                    value={heightCell}
                    onChange={
                        (e: ChangeEvent<HTMLInputElement>) => {
                            setHeightCell(Number(e.target.value));
                        }
                    }
                    type="number"/>
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
            </div>
        </>
    );
};

export default ControlForm;
