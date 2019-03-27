const express = require("express");
const hbars = require("express-handlebars");
const path = require("path");

const app = express();

// Handlebars
app.engine("handlebars", hbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/cards"));

app.listen(8888, () => {});
