import React, {createContext, useState} from 'react';

const UserContext = createContext({});

type UserProviderProps = {
    children: any
}

const UserProvider = ({children}: UserProviderProps) => {
    const [modalStatus, setModalStatus] = useState(false);
    const [statusText, setStatusText] = useState("");

    return (
        <UserContext.Provider
        value={{modalStatus, setModalStatus, statusText, setStatusText}}>
            {children}
        </UserContext.Provider>
    )
}


export {UserProvider, UserContext};
