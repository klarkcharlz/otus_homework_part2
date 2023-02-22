import React, {useState} from 'react';
import Field from './components/Field/Field'
import classes from './App.module.scss';
import Register from './components/Register/Register';

function App() {
    const [cells, setCells] = useState(60);
    const [name, setName] = useState('');
    const [runGame, setRunGame] = useState(false);

    const saveData = (name: string, cnt: number) => {
        setName(name);
        setCells(cnt);
    }

    return (
        <div className={classes.app}>
            <h1 style={{
                textAlign: 'center'
            }}>{`Welcome ${name}`}</h1>
            <Register setRunGame={setRunGame} saveData={saveData} cells={cells}/>
            <Field setRunGame={setRunGame} runGame={runGame} cells={cells}/>
        </div>
    );
}

export default App;
