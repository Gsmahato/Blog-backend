const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// env config
dotenv.config();

// routes import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const navRoutes = require("./routes/navRoutes")

// mongodb connection
connectDB();

// rest objects
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/navitem",navRoutes)

// Port
const PORT = process.env.PORT || 8080;

// listen
app.listen(8080, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} port number ${PORT}`.bgCyan.white
  );
});
