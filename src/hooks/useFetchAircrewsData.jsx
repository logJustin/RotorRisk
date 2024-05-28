export const fetchAircrewsData = async (setAircrews) => {
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    try {
        const response = await fetch(`${backend_url}/api/aircrews`);
        const jsonData = await response.json();
        setAircrews(jsonData);
    } catch (error) {
        console.error('Error fetching aircrews data:', error);
    }
};