import React, {useEffect, useState} from 'react';
import classes from './Field.module.scss';
import Cell from "../Cell/Cell";
import ControlForm from '../ControlForm/ControlForm';
import StatusPanel from '../StatusPanel/StatusPanel';
import {useSelector} from 'react-redux';
import {StateType} from "../../redux/actions";


type FieldProps = {
    runGame: boolean,
    setRunGame: Function,
    logOut: Function
};

const defaultSettings = {
    width: 200,
    height: 200,
    speed: 2,
    playMode: false
}

const Field = ({runGame, setRunGame, logOut}: FieldProps) => {
    const [width, setWidth] = useState(defaultSettings.width);
    const [height, setHeight] = useState(defaultSettings.height);
    const [speed, setSpeed] = useState(defaultSettings.speed);
    const [progress, setProgress] = useState(0);

    const stateCells = useSelector(
        (state: StateType) => state.cells
    );

    useEffect(() => {
        if (runGame) {
            setProgress(Math.floor(Math.random() * stateCells));
        }
    }, [runGame]);

    const setSettings = (width: number, height: number, speed: number) => {
        setWidth(width);
        setHeight(height);
        setSpeed(speed);
    }

    const reset = () => {
        setWidth(defaultSettings.width);
        setHeight(defaultSettings.height);
        setSpeed(defaultSettings.speed);
        setRunGame(defaultSettings.playMode);
        setProgress(0);
    }

    return (
        <>
            <StatusPanel width={width} height={height} speed={speed}
                         run={runGame}/>
            <ControlForm setSettings={setSettings} setPlayMode={setRunGame}
                         reset={reset} logOut={logOut} speed={speed} width={width}
                         height={height}/>
            <div
                style={
                    {
                        pointerEvents: runGame ? 'auto' : 'none',
                    }
                }
                className={classes.field}>
                { progress ?
                    [...Array(stateCells)].map((item, index) => {
                        return (
                            <Cell
                                key={index}
                                height={height}
                                width={width}
                                speed={speed}
                                active={index <= progress - 1}
                                id={index + 1}/>
                        )
                    }) : null
                }
            </div>
        </>
    );
};

export default Field;
