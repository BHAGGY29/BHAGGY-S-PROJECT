import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

import routes from "./routes/index";

// Static folder
app.use(express.static("public"));

// Set EJS as templating engine
app.set("view engine", "ejs");

// Routes.
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
