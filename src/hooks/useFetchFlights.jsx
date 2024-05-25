import { useState, useEffect } from 'react';

export const useFetchFlights = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/flights');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                jsonData.sort((a, b) => {
                    const dateA = new Date(a.date.replace(/(\d{2})([A-Za-z]{3})(\d{2})/, "$2 $1, $3"));
                    const dateB = new Date(b.date.replace(/(\d{2})([A-Za-z]{3})(\d{2})/, "$2 $1, $3"));
                    return dateA - dateB;
                });
                setFlights(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, []); // Empty dependency array means this effect runs once when the component mounts.

    return { flights, loading, error };
};
