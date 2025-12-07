const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Віддаємо axios ESM з node_modules
app.use("/node_modules/axios", express.static(path.join(__dirname, "node_modules/axios/dist/esm")));

app.get("/api/carousel", (req, res) => {
    res.json([
        {title: "GameDev", image: "/pictures/GameDevIcon.png"},
        {title: "Machine Learning", image: "/pictures/MLIcon.png"},
        {title: "HTML & CSS", image: "/pictures/tag.png"},
        {title: "Computer Sciense", image: "/pictures/ComputerScienseIcon.png"},
    ]);
});

const allCourses = [
    { link: '/unity_what', title: 'Unity what?', category: 'Game Development', age: 15, weeks_number: 6, level: 'easy', level_path: './pictures/easyLevel.png', logo_path: './pictures/unity.png' },

    { link: '/computer_vision', title: 'Computer Vision', category: 'Machine Learning', age: 15, weeks_number: 8, level: 'hard', level_path: './pictures/hardLevel.png', logo_path: './pictures/computer_vision.png' },

    { link: '/html_css', title: 'HTML&CSS for noobs', category: 'HTML&CSS', age: 15, weeks_number: 4, level: 'easy', level_path: './pictures/easyLevel.png', logo_path: './pictures/html.png' },

    { link: '/computer_inside', title: 'Computer inside', category: 'Computer sciense', age: 15, weeks_number: 6, level: 'medium', level_path: './pictures/mediumLevel.png', logo_path: './pictures/computer.png' },

    { link: '/cyber_detective', title: 'Cyber Detective', category: 'Cybersecurity Basics', age: 15, weeks_number: 6, level: 'hard', level_path: './pictures/hardLevel.png', logo_path: './pictures/magnifier_glass.png' },

    { link: '/pixel_art', title: 'Pixel Alchemist', category: 'Digital Art', age: 14, weeks_number: 4, level: 'easy', level_path: './pictures/easyLevel.png', logo_path: './pictures/art.png' }
];


app.get("/", (req, res) => res.render("lab1main"));
app.get("/courses", (req, res) => {
    const search = (req.query.search || "").toLocaleLowerCase();

    let filterd = allCourses;

    if (search.length > 0){
        filterd = allCourses.filter(c =>
            c.title.toLowerCase().includes(search) ||
            c.category.toLowerCase().includes(search)
        );
    }

    res.render("lab1courses",{
        courses: filterd,
        search
    });
});
    //res.render("lab1courses")
    


app.get("/computer_inside", (req, res) => res.render("computer_inside"));
app.get("/computer_vision", (req, res) => res.render("computer_vision"));
app.get("/cyber_detective", (req, res) => res.render("cyber_detective"));
app.get("/html_css", (req, res) => res.render("web_course"));
app.get("/pixel_art", (req, res) => res.render("pixel_art"));
app.get("/unity_what", (req, res) => res.render("unity_what"));

app.get("/enrollment", (req, res) => res.render("lab1enrollment"));

app.listen(1234, () => console.log("http://localhost:1234"));
