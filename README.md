# Demon Slayer Facts ✨

A fun and colorful web application designed for girls aged 11 years that presents facts about the Demon Slayer (Kimetsu no Yaiba) TV series! 🌸

## Features 🎉

- **Interactive Menu**: Choose from different categories to explore
- **Characters**: Browse and learn about all your favorite Demon Slayer characters
- **Breathing Techniques**: Discover the amazing breathing styles and their powers
- **Demons**: Find out about the villains and their stories
- **Beautiful Design**: Pink and purple themed interface designed for young girls
- **Bootstrap UI**: Responsive and mobile-friendly design
- **Real-time Data**: Fetches data from the official Demon Slayer API

## Technologies Used 💻

- **Backend**: Node.js with Express
- **View Engine**: EJS (Embedded JavaScript Templates)
- **HTTP Client**: Axios
- **Styling**: Bootstrap 5 + Custom CSS
- **API**: [Demon Slayer API](https://www.demonslayer-api.com/documentation)

## Installation & Setup 🚀

1. **Clone the repository**
   ```bash
   git clone https://github.com/Maayan-Moshe/demon-slayer-facts.git
   cd demon-slayer-facts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure 📁

```
demon-slayer-facts/
├── app.js                 # Main Express server
├── package.json           # Project dependencies
├── public/               
│   └── css/
│       └── style.css      # Custom styling
├── views/
│   ├── index.ejs          # Home page
│   ├── characters.ejs     # Characters list page
│   ├── character-detail.ejs  # Individual character page
│   ├── breathing-techniques.ejs  # Breathing techniques page
│   ├── demons.ejs         # Demons list page
│   └── error.ejs          # Error page
└── README.md
```

## How to Use 📚

1. **Home Page**: Start at the home page and choose what you want to explore
2. **Browse Categories**: Click on Characters, Breathing Techniques, or Demons
3. **View Details**: Click on any item to see more detailed information
4. **Navigate**: Use the navigation menu at the top to switch between sections

## API Endpoints Used 🔗

- `GET /` - Home page
- `GET /characters` - List all characters
- `GET /character/:id` - Get character details
- `GET /breathing-techniques` - List all breathing techniques
- `GET /demons` - List all demons

## Design Philosophy 🎨

The website is designed with:
- Bright, friendly colors (pinks and purples)
- Large, easy-to-read text
- Simple navigation
- Fun emojis and decorative elements
- Age-appropriate content presentation

## Contributing 🤝

Feel free to submit issues and pull requests to improve the application!

## License 📄

ISC

---

Made with 💖 for Demon Slayer fans!
