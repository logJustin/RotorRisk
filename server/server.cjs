const express = require('express');
const path = require('path');
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');

// dotenv.config({ path: '../.env' });
try {
    dotenv.config();
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

// Serve the static assets of the React app
app.use(express.static(path.join(__dirname, '..', 'src'))); // Adjust to the correct folder path

// Catch-all route to serve the React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
