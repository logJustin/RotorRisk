import React, { createContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

    const [viewMode, setViewMode] = useState('');

    return (
        <FilterContext.Provider value={{ viewMode, setViewMode }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => React.useContext(FilterContext);
