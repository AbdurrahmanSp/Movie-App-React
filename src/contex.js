import React,  { useState, createContext } from 'react';

export const Context = createContext();

const UserProvider = ({ children }) => {
    const [state, setState] = useState(undefined);

    return (
        <Context.Provider value={[state, useState]}>{children}</Context.Provider>
    );
}

export default UserProvider;