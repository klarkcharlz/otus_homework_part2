import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import Field from './components/Field/Field'
import Register from './components/Register/Register';
import Greetings from './components/Greetings/Greetings';
import classes from './App.module.scss';
import {
    saveState, loadState, StateType, setState, resetState
} from './redux/actions';
import StatusModal from "./components/StatusModal/StatusModal"
import useUserContext from "./hooks/useUserContext";

function App() {
    const [runGame, setRunGame] = useState(false);
    // @ts-ignore
    const {modalStatus, setModalStatus, statusText} = useUserContext();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(resetState());
    }

    const saveData = (name: string, cells: number) => {
        dispatch(
           setState({
               name,
               cells
           })
        );
    }

    return (
        <div className={classes.app}>
             <StatusModal open={modalStatus} setOpen={setModalStatus} status={statusText}/>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Register
                                setRunGame={setRunGame}
                                saveData={saveData}/>
                        }
                    />
                    <Route
                        path='/greet'
                        element={<Greetings/>}
                    />
                    <Route
                        path='/game'
                        element={
                            <Field
                                setRunGame={setRunGame}
                                runGame={runGame}
                                logOut={logOut}/>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export const mapStateToProps = (state: StateType) => ({
    appState: state
});

export const mapDispatchToProps = {
    saveState,
    loadState
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
