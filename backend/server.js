const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routesUrls = require("./routes/routes");
const cors = require("cors");

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// Activate body-parser
app.use(express.json());
app.use(cors());

// Base URL
app.use("/app", routesUrls);

// port
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
