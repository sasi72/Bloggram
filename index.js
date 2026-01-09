import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Using 'let' or 'const' is standard for 2026
let blogsArray = []; 

app.get("/", (req, res) => {
  // Pass the blogs to home if you want them displayed there too
  res.render("home.ejs", { blog: blogsArray });
});

// GET route for blogs: This is the ONLY place that should render the list
app.get("/blogs", (req, res) => {
  res.render("blogs.ejs", { blog: blogsArray });
});

// POST route for blogs: This now REDIRECTS to prevent duplicates on refresh
app.post("/blogs", (req, res) => {
  // Push the data to your array
  blogsArray.push(req.body);
  
  console.log("New blog added. Total blogs:", blogsArray.length);

  /* 
     CRITICAL CHANGE: 
     Instead of res.render("blogs.ejs"), we use res.redirect("/blogs").
     This clears the form data from the browser memory. 
  */
  res.redirect("/blogs"); 
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

// Post/Redirect/Get pattern applied here too
app.post("/submit", (req, res) => {
  const name = req.body["user"];
  // If result.ejs is just a confirmation, this is fine, 
  // but if it's a page you might refresh, consider redirecting to a GET /result
  res.render("result.ejs", { userName: name });
});

app.post("/", (req, res) => {
  res.redirect("/"); 
});

app.listen(port, () => {
  console.log(`Server started running at http://localhost:${port}`);
});