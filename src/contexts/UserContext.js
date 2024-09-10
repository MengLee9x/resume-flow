"use client";

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children, initialUser }) => {
    const [user, setUser] = useState(initialUser);

    const clearUser = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, setUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);