import React, { createContext, useState, useEffect } from 'react';
import { fetchAircrewsData } from '../hooks/useFetchAircrewsData'
import { fetchFlightsData } from '../hooks/useFetchFlights';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [flightData, setFlightData] = useState({});
    const [formMode, setFormMode] = useState('File');
    const [flights, setFlights] = useState([]);
    const [aircrews, setAircrews] = useState([]);
    const [briefCommentContent, setBriefCommentContent] = useState()
    const drawerWidth = 240;

    useEffect(() => {
        fetchFlightsData(setFlights);
        fetchAircrewsData(setAircrews);
    }, []);

    const handleModalOpen = async (flight, mode) => {
        await setFlightData(flight);
        await setFormMode(mode);
        await setModalOpen(true);
    };

    const handleModalClose = () => setModalOpen(false);

    return (
        <GlobalStateContext.Provider
            value={{ modalOpen, formMode, drawerWidth, flightData, setFlightData, aircrews, setAircrews, flights, setFlights, briefCommentContent, setBriefCommentContent, handleModalOpen, handleModalClose, fetchAircrewsData, fetchFlightsData }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => React.useContext(GlobalStateContext);
