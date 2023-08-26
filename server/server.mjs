import express from 'express';
import path from 'path';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
import addFlight from './backendFunctions/addFlight.js';
import updateFlight from './backendFunctions/updateFlight.js';

// Use the import.meta.url to get the current file's URL
const currentModuleUrl = new URL(import.meta.url);
// Get the directory path from the URL
const currentDir = path.dirname(currentModuleUrl.pathname);

try {
    dotenv.config();
    // dotenv.config({ path: '../.env' });
} catch (error) {
    console.error('Error loading .env file:', error);
}


const app = express();
const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.VITE_PGConnection;
// Middleware
app.use(express.json());
app.use(cors());

// Create a pool instance using the database connection URL
const pool = new Pool({
    connectionString: DATABASE_URL,
});

// Pre-warm the connection pool
(async () => {
    try {
        const client = await pool.connect();
        await client.query('SELECT NOW()');
        client.release();
        console.log('Connection pool pre-warmed');
    } catch (error) {
        console.error('Error pre-warming connection pool:', error);
    }
})();

app.get('/api/aircrews', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM aircrews');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

app.get('/api/flights', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM flights');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

// Add this route to your Express server
app.post('/api/add-flight', async (req, res) => {
    try {
        const flightData = req.body;
        await addFlight(flightData);
        res.status(200).json({ message: 'Flight added successfully' });
    } catch (error) {
        console.error('Error adding flight:', error);
        res.status(500).json({ error: 'An error occurred while adding the flight' });
    }
});
// Add this route to your Express server
app.put('/api/update-flight', async (req, res) => {
    try {
        const flightData = req.body;
        await updateFlight(flightData);
        res.status(200).json({ message: 'Flight updated successfully' });
    } catch (error) {
        console.error('Error adding flight:', error);
        res.status(500).json({ error: 'An error occurred while adding the flight' });
    }
});

// Serve the static assets of the React app
app.use(express.static(path.join(currentDir, '..', 'src')));

// Catch-all route to serve the React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(currentDir, '..', 'index.html'))
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
