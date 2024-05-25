import React, { createContext, useState, useEffect } from 'react';

export const fetchFlightsData = async (setFlights) => {
    try {
        const response = await fetch('http://localhost:3001/api/flights');
        const jsonData = await response.json();
        jsonData.sort((a, b) => {
            const dateA = new Date(a.date.replace(/(\d{2})([A-Za-z]{3})(\d{2})/, "$2 $1, $3"));
            const dateB = new Date(b.date.replace(/(\d{2})([A-Za-z]{3})(\d{2})/, "$2 $1, $3"));
            return dateA - dateB;
        });
        setFlights(jsonData);
    } catch (error) {
        console.error('Error fetching flights data:', error);
    }
};

export const fetchAircrewsData = async (setAircrews) => {
    try {
        const response = await fetch('http://localhost:3001/api/aircrews');
        const jsonData = await response.json();
        setAircrews(jsonData);
    } catch (error) {
        console.error('Error fetching aircrews data:', error);
    }
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [flightData, setFlightData] = useState({});
    const [formMode, setFormMode] = useState('File');
    const [flights, setFlights] = useState([]);
    const [aircrews, setAircrews] = useState([]);
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
            value={{ modalOpen, formMode, drawerWidth, flightData, setFlightData, aircrews, setAircrews, flights, setFlights, handleModalOpen, handleModalClose, fetchAircrewsData, fetchFlightsData }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => React.useContext(GlobalStateContext);
