const express = require('express');
const axios = require('axios');
const path = require('path');
const { mockCharacters, mockBreathingTechniques, mockDemons } = require('./mockData');

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

// Flag to use mock data (set to true when API is unavailable)
const USE_MOCK_DATA = true;

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Demon Slayer Facts' });
});

// Get all characters
app.get('/characters', async (req, res) => {
    try {
        let characters = [];
        
        if (USE_MOCK_DATA) {
            characters = mockCharacters;
        } else {
            const response = await axios.get(`${API_BASE_URL}/characters`);
            characters = response.data.content || [];
        }
        
        res.render('characters', { 
            title: 'Characters',
            characters: characters
        });
    } catch (error) {
        console.error('Error fetching characters:', error.message);
        // Fallback to mock data on error
        res.render('characters', { 
            title: 'Characters',
            characters: mockCharacters
        });
    }
});

// Get character details
app.get('/character/:id', async (req, res) => {
    try {
        let character = {};
        
        if (USE_MOCK_DATA) {
            character = mockCharacters.find(c => c.id === parseInt(req.params.id)) || {};
        } else {
            const response = await axios.get(`${API_BASE_URL}/characters/${req.params.id}`);
            character = response.data.content || {};
        }
        
        res.render('character-detail', { 
            title: 'Character Details',
            character: character
        });
    } catch (error) {
        console.error('Error fetching character details:', error.message);
        // Fallback to mock data on error
        const character = mockCharacters.find(c => c.id === parseInt(req.params.id)) || {};
        res.render('character-detail', { 
            title: 'Character Details',
            character: character
        });
    }
});

// Get all breathing techniques
app.get('/breathing-techniques', async (req, res) => {
    try {
        let techniques = [];
        
        if (USE_MOCK_DATA) {
            techniques = mockBreathingTechniques;
        } else {
            const response = await axios.get(`${API_BASE_URL}/breathings`);
            techniques = response.data.content || [];
        }
        
        res.render('breathing-techniques', { 
            title: 'Breathing Techniques',
            techniques: techniques
        });
    } catch (error) {
        console.error('Error fetching breathing techniques:', error.message);
        // Fallback to mock data on error
        res.render('breathing-techniques', { 
            title: 'Breathing Techniques',
            techniques: mockBreathingTechniques
        });
    }
});

// Get all demons
app.get('/demons', async (req, res) => {
    try {
        let demons = [];
        
        if (USE_MOCK_DATA) {
            demons = mockDemons;
        } else {
            const response = await axios.get(`${API_BASE_URL}/demons`);
            demons = response.data.content || [];
        }
        
        res.render('demons', { 
            title: 'Demons',
            demons: demons
        });
    } catch (error) {
        console.error('Error fetching demons:', error.message);
        // Fallback to mock data on error
        res.render('demons', { 
            title: 'Demons',
            demons: mockDemons
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
