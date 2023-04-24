import React from 'react';
import classes from './Cell.module.scss';

type CellProps = {
    lived: boolean,
    speed: number
};

const Cell = ({lived, speed}: CellProps) => {

    return (
        <div
            className={`${classes.cell} ${lived ? classes.live: classes.die}`}
            style={{
                transition: `all ${speed - 0.5}s ease-out`
            }}>
        </div>
    );
};

export default Cell;