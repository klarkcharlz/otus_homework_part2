import React, {useState, useCallback} from 'react';
import classes from './Cell.module.scss';

type CellProps = {
    id: number,
    width: number,
    height: number,
    speed: number,
    active: boolean
};

const Cell = ({id, width, height, speed, active=false}: CellProps) => {
    const [visible, setVisible] = useState(active);

    const toggleVisible = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            setVisible(prevState => !prevState);
        },
        [setVisible]
    );

    return (
        <div
            className={`${classes.cell} ${visible ? classes.cell_visible: classes.cell_hidden}`}
            style={
                {
                    height: height,
                    width: width,
                    transition: `background-color ${speed}s ease-out`
                }
            }
            onClick={toggleVisible}>
            <h2 className={visible ? classes.visible: classes.hidden}>
                {id}
            </h2>
        </div>
    );
};

export default Cell;