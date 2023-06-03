//build dependencies

const express = require("express");
const cors = require("cors");
const path = require('path');
const expressfileuploader = require("express-fileupload");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

const whitelist = ["https://righttimesentertainment.com/", "http://righttimesentertainment.com/", "www.righttimesentertainment.com"];

app.use(
  cors()
);
app.use(
  expressfileuploader({
    useTempFiles: true,
  })
);

//connect database
require("./DB/db").connect();

//local dependencies
const adminRouter = require("./routes/admin.routes");
const songRouter = require("./routes/song.routes");
const newRouter = require("./routes/news.routes");
const statsRouter = require("./routes/stats.routes");
const albumRouter = require("./routes/album.routes");

// routes
app.use("/admin", adminRouter);
app.use("/song", songRouter);
app.use("/news", newRouter);
app.use("/stats", statsRouter);
app.use("/album", albumRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

const port = process.env.PORT || 3000;

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);
  res.render("error");
});

app.listen(port, (req, res, next) => {
  console.log(`server running on port ${port}`);
});
