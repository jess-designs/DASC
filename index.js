import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));

app.use((req, res, next) => {
    res.locals.currentPage = req.path;
    next();
});

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/boat", (req, res) => {
    res.render("boat.ejs");
})

app.get("/join", (req, res) => {
    res.render("join.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/photos", (req, res) => {
    res.render("photos.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
