import React from 'react';
import classes from './StatusPanel.module.scss';
import { Provider } from 'react-redux';
import {store} from './../../redux/store';

type StatusProps = {
    width: number,
    height: number,
    speed: number,
    run: boolean
};


function StatusPanel({width, height, speed, run}: StatusProps) {
  return (
      <div className={classes.status_panel}>
          <p>{`width: ${width}; height: ${height}; speed: ${speed}; game: ${run ? 'ON': 'OFF'}`}</p>
      </div>
  );
}

export default StatusPanel;
