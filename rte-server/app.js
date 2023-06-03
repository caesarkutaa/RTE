//build dependencies

const express = require("express");
const cors = require("cors");
const expressfileuploader = require("express-fileupload");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json

app.use(bodyParser.json());
app.use(express.json());

const whitelist = ["https://righttimesentertainment.com/", "https://righttimesentertainment.com/"];

app.use(
  cors({
    origin: whitelist,
  })
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
