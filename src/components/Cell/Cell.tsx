import React, {useState, useCallback} from 'react';
import classes from './Cell.module.scss';

type CellProps = {
    lived: boolean,
};

const Cell = ({lived}: CellProps) => {

    return (
        <div
            className={`${classes.cell} ${lived ? classes.live: classes.die}`}
            style={{
                transition: `all 0.5s ease-out`
            }}>
        </div>
    );
};

export default Cell;