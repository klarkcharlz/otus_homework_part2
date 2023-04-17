import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {StateType} from "../../redux/actions";
import classes from './Greetings.module.scss';

function Greetings() {
    const navigate = useNavigate();

    const stateName = useSelector(
        (state: StateType) => state.name
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/game')
        }, 1000);
        return () => {
            clearInterval(timeoutId);
        }
    }, []);

    return (
        <div>
            <h1 style={{
                textAlign: 'center'
            }}>{`Welcome ${stateName}`}</h1>
        </div>
    );
}

export default Greetings;
