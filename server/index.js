const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const peopleRoute = require("./routes/people.routes.js");
const planetRoute = require("./routes/planet.route.js");
const filmsRoute = require("./routes/films.routes.js")
const speciesRoute = require("./routes/species.routes.js")
const vehiclesRoute = require("./routes/vehicles.routes.js")
const starshipsRoute = require("./routes/starships.routes.js")

const PORT = 5555;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/people", peopleRoute);
app.use("/api/planet", planetRoute);
app.use("/api/films", filmsRoute);
app.use("/api/species", speciesRoute)
app.use("/api/vehicles", vehiclesRoute)
app.use("/api/starships", starshipsRoute)

// Server HealthCheck
app.get("/", (req, res) => {
  res.json({ message: "good" });
});

// Db connection
mongoose
  .connect(
    "mongodb+srv://alan:1234@sw.blior6z.mongodb.net/starwars?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB Connected...");
    app.listen(PORT, async () => {
      console.log("Server is running " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
