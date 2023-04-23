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
    speed: 2,
    playMode: false,
}

function getRandomInt(min: number, max: number) {
    const num = Math.floor(Math.random() * max);
    return num > max ? max : num < min ? min : num;
}

const generateStartedArray = (stateCellsInLine: number) => {
    const livedCellsCnt = getRandomInt(
        stateCellsInLine, stateCellsInLine * 2
    );
    let newFieldArray = [];
    let line;
    for (let i = 0; i < stateCellsInLine; i++) {
        line = [];
        for (let j = 0; j < stateCellsInLine; j++) {
            line.push(0);
        }
        newFieldArray.push(line);
    }
    let liveCellsInField = 0;
    while (liveCellsInField < livedCellsCnt) {
        const row = getRandomInt(0, stateCellsInLine);
        const column = getRandomInt(0, stateCellsInLine);
        const liveFlag = newFieldArray[row][column];
        if (!liveFlag) {
            newFieldArray[row][column] = 1;
            liveCellsInField++;
        }
    }
    return newFieldArray;
}

const cloneField = (field: Array<Array<number>>) => {
    const newField = [];
    for (const line of field) {
        newField.push(line.slice(0))
    }
    return newField;
}

const Field = ({runGame, setRunGame, logOut}: FieldProps) => {
        const stateCellsInLine = useSelector(
            (state: StateType) => state.cells
        );

        const [speed, setSpeed] = useState(defaultSettings.speed);
        const [gameField, setGameField] = useState(
            generateStartedArray(stateCellsInLine)
        );

        const setSettings = (speed: number) => {
            setSpeed(speed);
        }

        const reset = () => {
            setSpeed(defaultSettings.speed);
            setRunGame(defaultSettings.playMode);
        }

        const calculateNewState = () => {
            let newGameField = cloneField(gameField);
            for (let y = 0; y < stateCellsInLine; y++) {
                for (let x = 0; x < stateCellsInLine; x++) {
                    newGameField[x][y] = getNewStatus(x, y);
                }
            }
            setGameField(newGameField);
        }

        const liveOrDie = (score: Array<number>, cell: number) => {
            let died = 0;
            let lived = 0;

            for(const cell of score){
                if(cell) lived++;
                else died++;
            }

            if(lived < 2 && cell == 1) {
                return 0;
            } else if(lived >= 2 && lived <=3 && cell == 1){
                // ToDo реализовать следующее поколение
                return 1;
            } else if(lived > 3 && cell == 1) {
                return 0;
            } else if(lived == 3 && cell == 0) {
                return 1;
            } else {
                return cell;
            }
        }

        const getNewStatus = (x: number, y: number) => {
            if (
                (y == 0 || y == (stateCellsInLine - 1)) && (
                    x == 0 || x == (stateCellsInLine - 1)
                )
            ) {
                const neighbor1 = gameField[(x - 1) < 0 ? x + 1 : x - 1][y];
                const neighbor2 = gameField[x][(y - 1) < 0 ? y + 1 : y - 1];
                const neighbor3 = gameField[(x - 1) < 0 ? x + 1 : x - 1][(y - 1) < 0 ? y + 1 : y - 1];
                return liveOrDie(
                    [neighbor1, neighbor2, neighbor3],
                    gameField[x][y]
                );
            } else if (
                ((x > 0 && x < (stateCellsInLine - 1)) && (
                    y == 0 || y == (stateCellsInLine - 1)
                )) || ((y > 0 && y < (stateCellsInLine - 1)) && (
                    x == 0 || x == (stateCellsInLine - 1)
                ))
            ) {
                const neighbor1 = gameField[x][y];
                const neighbor2 = gameField[x][y];
                const neighbor3 = gameField[x][y];
                const neighbor4 = gameField[x][y];
                const neighbor5 = gameField[x][y];
                return liveOrDie(
                    [
                        neighbor1, neighbor2, neighbor3,
                        neighbor4, neighbor5,
                    ],
                    gameField[x][y]
                );
            } else {
                const neighbor1 = gameField[x - 1][y - 1];
                const neighbor2 = gameField[x][y - 1];
                const neighbor3 = gameField[x + 1][y - 1];
                const neighbor4 = gameField[x - 1][y];
                const neighbor5 = gameField[x + 1][y];
                const neighbor6 = gameField[x - 1][y + 1];
                const neighbor7 = gameField[x][y + 1];
                const neighbor8 = gameField[x + 1][y + 1];
                return liveOrDie(
                    [
                        neighbor1, neighbor2, neighbor3, neighbor4,
                        neighbor5, neighbor6, neighbor7, neighbor8
                    ],
                    gameField[x][y]
                );
            }
        }

        useEffect(() => {
            const interval = setInterval(() => {
                calculateNewState();
            }, speed * 1000);
        }, []);

        return (
            <>
                <StatusPanel speed={speed}
                             run={runGame}/>
                <ControlForm setSettings={setSettings} setPlayMode={setRunGame}
                             reset={reset} logOut={logOut} speed={speed}/>
                <div className={classes.fieldWrapper}>
                    <div className={classes.field}
                         style={{
                             width: `${50 * stateCellsInLine + 2 * stateCellsInLine}px`
                         }}>
                        {
                            gameField.map(
                                (row, xIndex) => row.map(
                                    (cell, zIndex) => {
                                        return (
                                            <Cell
                                                key={stateCellsInLine * xIndex + zIndex + 1}
                                                lived={cell == 1}/>
                                        )
                                    })
                            )
                        }
                    </div>
                </div>
            </>
        );
    }
;

export default Field;
