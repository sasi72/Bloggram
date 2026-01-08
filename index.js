import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var blogsArray = new Array();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { blog: blogsArray });
});

app.get("/blogs", (req, res) => {
  res.render("blogs.ejs", { blog: blogsArray });
});

app.post("/blogs", (req, res) => {
  // var blogObjects = req.body;
  blogsArray.push(req.body);
  console.log(blogsArray);
  res.render("blogs.ejs", { blog: blogsArray });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/submit", (req, res) => {
  const name = req.body["user"];
  res.render("result.ejs", { userName: name });
});

app.listen(port, () => {
  console.log(`server started running at post ${port}`);
});