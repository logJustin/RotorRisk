export const fetchFlightsData = async (setFlights) => {
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    try {
        let response = await fetch(`${backend_url}/api/flights`);
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