import { useState, useEffect } from 'react';

export const useFetchAircrews = () => {
    const [aircrews, setAircrews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAircrews = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/aircrews');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setAircrews(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAircrews();
    }, []); // Empty dependency array means this effect runs once when the component mounts.

    return { aircrews, loading, error };
};
