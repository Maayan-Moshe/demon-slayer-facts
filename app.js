const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Demon Slayer API base URL
const API_BASE_URL = 'https://demonslayer-api.com/api/v1';

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Demon Slayer Facts' });
});

// Get all characters
app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/characters`);
        res.render('characters', { 
            title: 'Characters',
            characters: response.data.content || []
        });
    } catch (error) {
        console.error('Error fetching characters:', error.message);
        res.render('error', { 
            title: 'Error',
            error: 'Unable to fetch characters. Please try again later.'
        });
    }
});

// Get character details
app.get('/character/:id', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/characters/${req.params.id}`);
        res.render('character-detail', { 
            title: 'Character Details',
            character: response.data.content || {}
        });
    } catch (error) {
        console.error('Error fetching character details:', error.message);
        res.render('error', { 
            title: 'Error',
            error: 'Unable to fetch character details. Please try again later.'
        });
    }
});

// Get all breathing techniques
app.get('/breathing-techniques', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/breathings`);
        res.render('breathing-techniques', { 
            title: 'Breathing Techniques',
            techniques: response.data.content || []
        });
    } catch (error) {
        console.error('Error fetching breathing techniques:', error.message);
        res.render('error', { 
            title: 'Error',
            error: 'Unable to fetch breathing techniques. Please try again later.'
        });
    }
});

// Get all demons
app.get('/demons', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/demons`);
        res.render('demons', { 
            title: 'Demons',
            demons: response.data.content || []
        });
    } catch (error) {
        console.error('Error fetching demons:', error.message);
        res.render('error', { 
            title: 'Error',
            error: 'Unable to fetch demons. Please try again later.'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
