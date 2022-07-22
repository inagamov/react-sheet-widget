// Imports
require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
// const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

// Receive app port from .env file or, if it's missing set it manually
const PORT = process.env.PORT || 5000;

// Use imports
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler); // Error handling, must be the last middleware

// Server launch
const start = async () => {
	try {
		// Connecting to the database
		await sequelize.authenticate();

		// Checking the state of the database with the data schema
		await sequelize.sync();

		// Start server listener
		app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
