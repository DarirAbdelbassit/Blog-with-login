//requirements
const app = require("./app");
const pug = require("pug");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const URI = process.env.DB_URI;
//Difined the template engine
app.set("view engine", "pug");
// Etablire une connexion à la base de données
async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}
connectDB();
//Démarage du serveur su le le port : PORT dans .env
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/posts`);
});
