import React, {useState} from 'react';
import classes from './Field.module.scss';
import Cell from "../Cell/Cell";
import ControlForm from '../ControlForm/ControlForm';
import StatusPanel from '../StatusPanel/StatusPanel';


type FieldProps = {
    cells: number
};

const defaultSettings = {
    width: 200,
    height: 200,
    speed: 2,
    playMode: true
}

const Field = ({cells}: FieldProps) => {
    const [width, setWidth] = useState(defaultSettings.width);
    const [height, setHeight] = useState(defaultSettings.height);
    const [speed, setSpeed] = useState(defaultSettings.speed);
    const [playMode, setPlayMode] = useState(defaultSettings.playMode);

    const setSettings = (width: number, height: number, speed: number) => {
        setWidth(width);
        setHeight(height);
        setSpeed(speed);
    }

    const reset =() => {
        setWidth(defaultSettings.width);
        setHeight(defaultSettings.height);
        setSpeed(defaultSettings.speed);
        setPlayMode(defaultSettings.playMode);
    }

    return (
        <>
            <StatusPanel width={width} height={height} speed={speed} run={playMode}/>
            <ControlForm setSettings={setSettings} setPlayMode={setPlayMode}
                         reset={reset} speed={speed} width={width} height={height}/>
            <div
                style={
                    {
                        pointerEvents: playMode ? 'auto': 'none',
                    }
                }
                className={classes.field}>
                {
                    [...Array(cells)].map((item, index) => {
                        return (
                            <Cell
                                key={index}
                                height={height}
                                width={width}
                                speed={speed}
                                id={index + 1}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Field;
