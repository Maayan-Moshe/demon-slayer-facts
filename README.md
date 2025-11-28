# Demon Slayer Facts ✨🌸

Welcome to **Demon Slayer Facts**! This is a delightful web application designed to present fun and interesting facts about the *Demon Slayer: Kimetsu no Yaiba* universe, with a special theme tailored for young fans! 💖

## 🌟 Features

- **Explore Characters**: Meet your favorite characters like Tanjiro, Nezuko, Zenitsu, and more! 👥
- **Discover Combat Styles**: Learn about the unique Breathing Styles and Blood Demon Arts! ⚔️
- **Detailed Information**: Click on any card to see detailed stats, descriptions, and abilities. 📜
- **Cute & Responsive Design**: A beautiful, pink-themed interface that looks great on both desktop and mobile devices. 📱💻
- **Robust Data Handling**: Fetches live data from the Demon Slayer API, with a reliable fallback to local mock data if the API is unavailable. 🛡️

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript), CSS3, Bootstrap 5
- **HTTP Client**: Axios
- **Data Source**: [Demon Slayer API](https://demonslayer-api.com/)

## 🚀 Getting Started

Follow these steps to get the project running on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Maayan-Moshe/demon-slayer-facts.git
    cd demon-slayer-facts
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    npm start
    ```
    *Or for development:*
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:3000` to view the app! 🎉

## 📂 Project Structure

```
demon-slayer-facts/
├── public/             # Static files (CSS, images)
│   └── css/
│       └── style.css   # Custom styling
├── views/              # EJS Templates
│   ├── partials/       # Reusable components (header, footer)
│   ├── data_list.ejs   # List view for characters/styles
│   ├── index.ejs       # Homepage
│   └── specific-detail.ejs # Detailed view
├── app.js              # Main Express application
├── mockData.js         # Fallback data
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🎨 Theme

The application features a custom "Demon Slayer for Girls" theme, utilizing a palette of:
- Primary Pink: `#9D3148`
- Soft Pink: `#F6BABC`
- Rosy Accent: `#EAAFC6`
- Cream Accent: `#F9E2CE`

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

---

Made with 💖 by Maayan Moshe
