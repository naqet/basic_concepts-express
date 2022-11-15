import * as dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.listen(process.env.PORT || 5000, () => {
	console.log("App is running");
});
