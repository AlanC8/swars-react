const express = require("express");
const axios = require("axios");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get("https://swapi.dev/api/people/" + id);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
