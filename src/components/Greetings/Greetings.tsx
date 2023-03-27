import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import classes from './Greetings.module.scss';

type GreetingsProps = {
    name: string,
};


function Greetings({name}: GreetingsProps) {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/game')
        }, 1000);
        return () => {
            // ToDo как очистить таймер правильно ?
        }
    }, [name]);

    return (
        <div>
            <h1 style={{
                textAlign: 'center'
            }}>{`Welcome ${name}`}</h1>
        </div>
    );
}

export default Greetings;
