import React from 'react';
import Field from './components/Field/Field'
import classes from './App.module.scss';


function App() {
  return (
      <div className={classes.app}>
          <Field cells={60}/>
      </div>
  );
}

export default App;
