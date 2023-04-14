import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import classes from './App.module.scss';
import Field from './components/Field/Field'
import Register from './components/Register/Register';
import Greetings from './components/Greetings/Greetings';
import { connect } from 'react-redux';
import {
    saveState, loadState, StateType
} from './redux/actions';

const defaultParams = {
    cells: 60,
    name: '',
    runGame: false
}

function App() {
    const [cells, setCells] = useState(defaultParams.cells);
    const [name, setName] = useState(defaultParams.name);
    const [runGame, setRunGame] = useState(defaultParams.runGame);

    const logOut = () => {
        setCells(defaultParams.cells);
        setName(defaultParams.name);
        setRunGame(defaultParams.runGame);
    }

    const saveData = (name: string, cnt: number) => {
        setName(name);
        setCells(cnt);
    }

    return (
        <div className={classes.app}>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={<Register setRunGame={setRunGame}
                                           saveData={saveData}
                                           cells={cells}/>}
                    />
                    <Route
                        path='/greet'
                        element={<Greetings name={name}/>}
                    />
                    <Route
                        path='/game'
                        element={<Field setRunGame={setRunGame}
                                        runGame={runGame} cells={cells}
                                        logOut={logOut}/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

const mapStateToProps = (state: StateType) => ({
  appState: state
});

const mapDispatchToProps = {
  saveState,
  loadState
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
