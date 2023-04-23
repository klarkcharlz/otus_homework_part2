import React from 'react';
import classes from './StatusPanel.module.scss';
import { Provider } from 'react-redux';
import {store} from './../../redux/store';

type StatusProps = {
    speed: number,
    run: boolean
};


function StatusPanel({speed, run}: StatusProps) {
  return (
      <div className={classes.status_panel}>
          <p>{`speed: ${speed}; game: ${run ? 'ON': 'OFF'}`}</p>
      </div>
  );
}

export default StatusPanel;
