import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { mockData } from "./mockData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const dataTypes = {
  "characters": {
    type: "characters",
    title: "Characters",
    icon: "👥",
    hero_title: "Meet the Characters! 👥✨",
    hero_subtitle:
      "Discover the brave warriors and formidable foes of Demon Slayer universe.",
    card_description:
      "Explore the diverse characters that make up the world of Demon Slayer, from fearless warriors to menacing demons.",
  },
  "combat-styles": {
    type: "combat-styles",
    title: "Combat Styles",
    icon: "⚔️",
    hero_title: "Explore Combat Styles! ⚔️🔥",
    hero_subtitle:
      "Uncover the unique fighting techniques and skills of Demon Slayer warriors.",
    card_description:
      "Dive into the various combat styles used by Demon Slayer warriors to defeat their foes.",
  },
};

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Demon Slayer API base URL
const API_BASE_URL = "https://demonslayer-api.com/api/v1";

// Flag to use mock data (set to true when API is unavailable)
const USE_MOCK_DATA = false;

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Demon Slayer Facts" , 
    dataTypes: dataTypes
  });
});

// Get all characters
app.get(`/:dataType`, async (req, res) => {
  const ejsContent = dataTypes[req.params.dataType];

  renderDataList(res, req.params.dataType, ejsContent);
});

// Get character details
app.get("/:dataType/:id", async (req, res) => {
  getSpecificDetails(req, res);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

async function renderDataList(res, dataType, ejsContent) {
  try {
    let data_list = [];

    if (USE_MOCK_DATA) {
      data_list =
        mockData[`mock${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`];
    } else {
      const response = await axios.get(`${API_BASE_URL}/${dataType}?limit=60`);
      data_list = response.data.content || [];
    }

    res.render("data_list", { ...ejsContent, ...{ dataList: data_list }, dataTypes: dataTypes});
  } catch (error) {
    console.error("Error fetching characters:", error.message);
    // Fallback to mock data on error
    res.render("data_list", {
      ...ejsContent,
      ...{
        dataList:
          mockData[
            `mock${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`
          ],
      },
    });
  }
}

// Get specific details
async function getSpecificDetails(req, res) {
  try {
    let specificData = {};
    const { dataType, id } = req.params;

    if (USE_MOCK_DATA) {
      specificData = mockCharacters.find((c) => c.id === parseInt(id)) || {};
    } else {
      const response = await axios.get(`${API_BASE_URL}/${dataType}?id=${id}`);
      specificData = response.data.content[0] || {};
    }

    res.render("specific-detail", {
      title: `${capitalizeFirstLetter(dataType)} Details`,
      specificData: specificData,
      dataTypes: dataTypes
    });
  } catch (error) {
    console.error("Error fetching character details:", error.message);
    // Fallback to mock data on error
    const specificData =
      mockCharacters.find((c) => c.id === parseInt(id)) || {};
    res.render("specific-detail", {
      title: `${capitalizeFirstLetter(dataType)} Details`,
      specificData: specificData,
      dataTypes: dataTypes
    });
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
