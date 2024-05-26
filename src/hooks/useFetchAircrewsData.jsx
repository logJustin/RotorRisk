export const fetchAircrewsData = async (setAircrews) => {
    try {
        const response = await fetch('http://localhost:3001/api/aircrews');
        const jsonData = await response.json();
        setAircrews(jsonData);
    } catch (error) {
        console.error('Error fetching aircrews data:', error);
    }
};